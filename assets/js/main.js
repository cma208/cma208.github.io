/* ============================================================
   Interactions + animations.
   Progressive enhancement: works without GSAP, respects
   prefers-reduced-motion.
   ============================================================ */
(function () {
  "use strict";

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const hasGSAP = typeof window.gsap !== "undefined";

  /* ---------- Theme ---------- */
  const THEME_KEY = "cm_theme";
  function currentTheme() {
    try {
      const saved = localStorage.getItem(THEME_KEY);
      if (saved === "light" || saved === "dark") return saved;
    } catch (e) { /* ignore */ }
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  function setTheme(t) {
    document.documentElement.setAttribute("data-theme", t);
    try { localStorage.setItem(THEME_KEY, t); } catch (e) { /* ignore */ }
  }
  // initial theme is also set inline in <head>; keep in sync here.
  setTheme(document.documentElement.getAttribute("data-theme") || currentTheme());

  const themeBtn = document.querySelector("[data-theme-toggle]");
  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      const next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
      setTheme(next);
    });
  }

  /* ---------- Mobile nav ---------- */
  const navToggle = document.querySelector("[data-nav-toggle]");
  const navLinks = document.querySelector("[data-nav-links]");
  function closeNav() {
    if (!navLinks) return;
    navLinks.classList.remove("open");
    if (navToggle) navToggle.setAttribute("aria-expanded", "false");
  }
  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      const open = navLinks.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", String(open));
    });
    navLinks.querySelectorAll("a").forEach((a) => a.addEventListener("click", closeNav));
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeNav(); });
    document.addEventListener("click", (e) => {
      if (navLinks.classList.contains("open") &&
          !navLinks.contains(e.target) && !navToggle.contains(e.target)) closeNav();
    });
  }

  /* ---------- Header scroll state ---------- */
  const header = document.querySelector("[data-header]");
  if (header) {
    const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* ---------- Counters ---------- */
  function animateCount(el) {
    const target = parseFloat(el.getAttribute("data-count"));
    if (isNaN(target)) return;
    const suffix = el.getAttribute("data-suffix") || "";
    const decimals = (el.getAttribute("data-count").split(".")[1] || "").length;
    if (reduceMotion || !hasGSAP) { el.textContent = target.toFixed(decimals) + suffix; return; }
    const obj = { v: 0 };
    window.gsap.to(obj, {
      v: target, duration: 1.6, ease: "power2.out",
      onUpdate: () => { el.textContent = obj.v.toFixed(decimals) + suffix; },
    });
  }

  /* ---------- Animations ---------- */
  const reveals = Array.from(document.querySelectorAll(".reveal"));
  const counters = Array.from(document.querySelectorAll("[data-count]"));

  function showAll() {
    reveals.forEach((el) => { el.style.opacity = "1"; el.style.transform = "none"; });
    counters.forEach(animateCount);
  }

  if (!hasGSAP || reduceMotion) {
    showAll();
  } else try {
    const gsap = window.gsap;
    gsap.registerPlugin(window.ScrollTrigger);

    // Hero intro (immediate, staggered)
    const heroBits = gsap.utils.toArray("[data-hero] .reveal");
    if (heroBits.length) {
      gsap.set(heroBits, { opacity: 0, y: 24 });
      gsap.to(heroBits, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", stagger: 0.09, delay: 0.1 });
    }

    // Scroll reveals (everything else)
    reveals.filter((el) => !el.closest("[data-hero]")).forEach((el) => {
      gsap.set(el, { opacity: 0, y: 30 });
      window.ScrollTrigger.create({
        trigger: el, start: "top 88%", once: true,
        onEnter: () => gsap.to(el, { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" }),
      });
    });

    // Counters on scroll
    counters.forEach((el) => {
      window.ScrollTrigger.create({
        trigger: el, start: "top 90%", once: true, onEnter: () => animateCount(el),
      });
    });

    // Parallax on hero grid
    const grid = document.querySelector(".hero-grid");
    if (grid) {
      gsap.to(grid, {
        yPercent: 18, ease: "none",
        scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true },
      });
    }

    // Safety: if any reveal never triggers, reveal on load fallback after a tick
    window.addEventListener("load", () => window.ScrollTrigger.refresh());
  } catch (err) {
    // If anything in the animation setup fails, never leave content hidden.
    showAll();
  }

  /* ---------- Active section in nav ---------- */
  const navAnchors = Array.from(document.querySelectorAll('[data-nav-links] a[href^="#"]'));
  const sections = navAnchors
    .map((a) => document.querySelector(a.getAttribute("href")))
    .filter(Boolean);
  if (sections.length && "IntersectionObserver" in window) {
    const byId = {};
    navAnchors.forEach((a) => { byId[a.getAttribute("href").slice(1)] = a; });
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const a = byId[entry.target.id];
        if (a && entry.isIntersecting) {
          navAnchors.forEach((x) => x.removeAttribute("aria-current"));
          a.setAttribute("aria-current", "true");
        }
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    sections.forEach((s) => obs.observe(s));
  }

  /* ---------- Year in footer ---------- */
  const yearEl = document.querySelector("[data-year]");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
