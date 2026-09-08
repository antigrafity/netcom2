/* ============================================================
   NETCOM SCINERGY NEWSANTARA — Interactions
   ============================================================ */
(function () {
  "use strict";

  /* ---------- Navbar scroll state ---------- */
  const nav = document.querySelector(".nav");
  const isSolid = nav && nav.classList.contains("nav--solid");
  const onScroll = () => {
    if (!nav || isSolid) return;
    nav.classList.toggle("scrolled", window.scrollY > 40);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- Scroll progress bar ---------- */
  const progress = document.querySelector(".scroll-progress");
  if (progress) {
    window.addEventListener("scroll", () => {
      const h = document.documentElement;
      const pct = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
      progress.style.width = pct + "%";
    }, { passive: true });
  }

  /* ---------- Mobile menu ---------- */
  const toggle = document.querySelector(".nav__toggle");
  const menu = document.querySelector(".nav__menu");
  if (toggle && menu) {
    toggle.addEventListener("click", () => {
      const open = menu.classList.toggle("open");
      toggle.classList.toggle("open", open);
      document.body.style.overflow = open ? "hidden" : "";
    });
    menu.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => {
        menu.classList.remove("open");
        toggle.classList.remove("open");
        document.body.style.overflow = "";
      })
    );
  }

  /* ---------- Reveal on scroll ---------- */
  const revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("in"));
  }

  /* ---------- Animated counters ---------- */
  const counters = document.querySelectorAll("[data-count]");
  const runCounter = (el) => {
    const target = parseFloat(el.dataset.count);
    const dec = (el.dataset.count.split(".")[1] || "").length;
    const dur = 1600;
    const start = performance.now();
    const step = (now) => {
      const p = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      const val = target * eased;
      el.textContent = dec ? val.toFixed(dec) : Math.round(val).toLocaleString();
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };
  if ("IntersectionObserver" in window) {
    const cio = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            runCounter(e.target);
            cio.unobserve(e.target);
          }
        });
      },
      { threshold: 0.5 }
    );
    counters.forEach((c) => cio.observe(c));
  }

  /* ---------- Timeline interactive ---------- */
  const timeline = document.querySelector(".timeline");
  if (timeline) {
    const steps = timeline.querySelectorAll(".tl-step");
    const bar = timeline.querySelector(".timeline__progress");
    const activate = () => {
      steps.forEach((s, i) => {
        setTimeout(() => s.classList.add("on"), i * 220);
      });
      if (bar) bar.style.width = "100%";
    };
    const tio = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            activate();
            tio.disconnect();
          }
        });
      },
      { threshold: 0.4 }
    );
    tio.observe(timeline);

    steps.forEach((s) => {
      s.addEventListener("mouseenter", () => {
        steps.forEach((x) => x.classList.remove("hot"));
        s.classList.add("hot");
      });
    });
  }

  /* ---------- Hero particles ---------- */
  const canvas = document.getElementById("particles");
  if (canvas && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const ctx = canvas.getContext("2d");
    let w, h, particles, raf;
    const COUNT = window.innerWidth < 720 ? 34 : 70;

    const resize = () => {
      w = canvas.width = canvas.offsetWidth;
      h = canvas.height = canvas.offsetHeight;
    };
    const init = () => {
      particles = Array.from({ length: COUNT }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 1.8 + 0.6,
      }));
    };
    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255,255,255,.55)";
        ctx.fill();
        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const dx = p.x - q.x, dy = p.y - q.y;
          const dist = Math.hypot(dx, dy);
          if (dist < 130) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = `rgba(186,26,26,${0.14 * (1 - dist / 130)})`;
            ctx.lineWidth = 1;
            ctx.stroke();
            ctx.strokeStyle = `rgba(160,190,240,${0.1 * (1 - dist / 130)})`;
            ctx.stroke();
          }
        }
      }
      raf = requestAnimationFrame(draw);
    };
    resize(); init(); draw();
    window.addEventListener("resize", () => { cancelAnimationFrame(raf); resize(); init(); draw(); });
  }

  /* ---------- Hero champion products slider ---------- */
  const heroTrack = document.getElementById("heroTrack");
  if (heroTrack) {
    const slides = Array.from(heroTrack.querySelectorAll(".hero__slide"));
    const toggles = Array.from(document.querySelectorAll(".hero__tgl"));
    const prevBtn = document.getElementById("heroPrev");
    const nextBtn = document.getElementById("heroNext");
    const total = slides.length;
    let index = 0;
    let timer = null;
    const AUTOPLAY = 6000;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const render = () => {
      heroTrack.style.transform = `translateX(-${index * 100}%)`;
      slides.forEach((s, i) => s.classList.toggle("is-active", i === index));
      toggles.forEach((t, i) => {
        const on = i === index;
        t.classList.toggle("active", on);
        t.setAttribute("aria-selected", on ? "true" : "false");
      });
    };

    const goTo = (i) => {
      index = (i + total) % total;
      render();
    };
    const next = () => goTo(index + 1);
    const prev = () => goTo(index - 1);

    const startAuto = () => {
      if (reduceMotion) return;
      stopAuto();
      timer = setInterval(next, AUTOPLAY);
    };
    const stopAuto = () => {
      if (timer) { clearInterval(timer); timer = null; }
    };
    const restart = () => { startAuto(); };

    toggles.forEach((t) =>
      t.addEventListener("click", () => { goTo(parseInt(t.dataset.slide, 10)); restart(); })
    );
    if (nextBtn) nextBtn.addEventListener("click", () => { next(); restart(); });
    if (prevBtn) prevBtn.addEventListener("click", () => { prev(); restart(); });

    // pause on hover
    const hero = document.getElementById("hero");
    if (hero) {
      hero.addEventListener("mouseenter", stopAuto);
      hero.addEventListener("mouseleave", startAuto);
    }

    // swipe support
    let startX = 0, dragging = false;
    heroTrack.addEventListener("touchstart", (e) => { startX = e.touches[0].clientX; dragging = true; stopAuto(); }, { passive: true });
    heroTrack.addEventListener("touchend", (e) => {
      if (!dragging) return;
      dragging = false;
      const dx = e.changedTouches[0].clientX - startX;
      if (Math.abs(dx) > 50) { dx < 0 ? next() : prev(); }
      startAuto();
    }, { passive: true });

    render();
    startAuto();
  }

  /* ---------- Forms (demo submit) ---------- */
  document.querySelectorAll("form[data-demo]").forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const ok = form.querySelector(".form__ok");
      if (ok) ok.style.display = "block";
      form.querySelectorAll("input, textarea, select").forEach((f) => (f.value = ""));
      if (ok) setTimeout(() => ok.scrollIntoView({ behavior: "smooth", block: "center" }), 50);
    });
  });

  /* ---------- Footer year ---------- */
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
