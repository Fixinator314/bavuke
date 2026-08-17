/* =========================================================
   BAVUKE FOUNDATION
   GET INVOLVED — WAYS TO HELP
========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") {
    console.warn("GSAP or ScrollTrigger is not loaded.");

    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  /* =====================================================
       ELEMENTS
    ===================================================== */

  const section = document.querySelector(".ways-to-help");

  const panels = document.querySelectorAll(".help-panel");

  const intro = document.querySelector(".ways-to-help-intro");

  const bottom = document.querySelector(".ways-to-help-bottom");

  const line = document.querySelector(".ways-to-help-line span");

  if (!section || !panels.length) {
    return;
  }

  /* =====================================================
       INITIAL STATE
    ===================================================== */

  gsap.set(intro, {
    opacity: 0,
    y: 60,
  });

  gsap.set(panels, {
    opacity: 0,
    y: 70,
  });

  gsap.set(bottom, {
    opacity: 0,
  });

  /* =====================================================
       ENTRANCE ANIMATION
    ===================================================== */

  const introTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: section,

      start: "top 70%",

      once: true,
    },
  });

  introTimeline

    .to(intro, {
      opacity: 1,

      y: 0,

      duration: 0.8,

      ease: "power3.out",
    })

    .to(
      panels,
      {
        opacity: 1,

        y: 0,

        duration: 0.8,

        stagger: 0.12,

        ease: "power3.out",
      },
      "-=0.35",
    )

    .to(
      bottom,
      {
        opacity: 1,

        duration: 0.5,
      },
      "-=0.25",
    );

  /* =====================================================
       PANEL INTERACTION
    ===================================================== */

  panels.forEach((panel) => {
    panel.addEventListener("mouseenter", () => {
      if (window.innerWidth <= 768) {
        return;
      }

      panels.forEach((otherPanel) => {
        otherPanel.classList.remove("active");
      });

      panel.classList.add("active");
    });

    panel.addEventListener("focus", () => {
      if (window.innerWidth <= 768) {
        return;
      }

      panels.forEach((otherPanel) => {
        otherPanel.classList.remove("active");
      });

      panel.classList.add("active");
    });

    panel.addEventListener("mouseleave", () => {
      if (window.innerWidth <= 768) {
        return;
      }

      /*
              Return the middle panel
              as the default active panel.
            */

      panels.forEach((otherPanel) => {
        otherPanel.classList.remove("active");
      });

      const defaultPanel = document.querySelector(".help-panel-volunteer");

      if (defaultPanel) {
        defaultPanel.classList.add("active");
      }
    });
  });

  /* =====================================================
       PROGRESS LINE
    ===================================================== */

  if (line) {
    gsap.to(line, {
      xPercent: 190,

      duration: 1.5,

      repeat: -1,

      ease: "none",
    });
  }

  /* =====================================================
       ICON MICRO-ANIMATION
    ===================================================== */

  panels.forEach((panel) => {
    const icon = panel.querySelector(".help-panel-icon");

    if (!icon) {
      return;
    }

    panel.addEventListener("mouseenter", () => {
      if (window.innerWidth <= 768) {
        return;
      }

      gsap.to(icon, {
        rotation: -8,

        scale: 1.08,

        duration: 0.4,

        ease: "power2.out",
      });
    });

    panel.addEventListener("mouseleave", () => {
      gsap.to(icon, {
        rotation: 0,

        scale: 1,

        duration: 0.4,

        ease: "power2.out",
      });
    });
  });

  /* =====================================================
       REFRESH
    ===================================================== */

  window.addEventListener("load", () => {
    ScrollTrigger.refresh();
  });
});
