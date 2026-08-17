/* =========================================================
   BAVUKE FOUNDATION
   GET INVOLVED — FINAL CTA
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

  const section = document.querySelector(".next-step-section");

  const content = document.querySelector(".next-step-content");

  const eyebrow = document.querySelector(".next-step-eyebrow");

  const heading = document.querySelector(".next-step-content h2");

  const description = document.querySelector(".next-step-content > p");

  const actions = document.querySelectorAll(".next-step-action");

  const ubuntu = document.querySelector(".next-step-ubuntu");

  const backgroundWord = document.querySelector(".next-step-word");

  if (!section) {
    return;
  }

  /* =====================================================
       INTRO TIMELINE
    ===================================================== */

  const intro = gsap.timeline({
    scrollTrigger: {
      trigger: section,

      start: "top 65%",

      once: true,
    },
  });

  intro

    .fromTo(
      eyebrow,

      {
        opacity: 0,
        y: 25,
      },

      {
        opacity: 1,
        y: 0,

        duration: 0.5,

        ease: "power3.out",
      },
    )

    .fromTo(
      heading,

      {
        opacity: 0,
        y: 60,
      },

      {
        opacity: 1,
        y: 0,

        duration: 0.9,

        ease: "power3.out",
      },
      "-=0.2",
    )

    .fromTo(
      description,

      {
        opacity: 0,
        y: 25,
      },

      {
        opacity: 1,
        y: 0,

        duration: 0.6,

        ease: "power3.out",
      },
      "-=0.4",
    )

    .fromTo(
      actions,

      {
        opacity: 0,
        y: 35,
      },

      {
        opacity: 1,
        y: 0,

        duration: 0.7,

        stagger: 0.12,

        ease: "power3.out",
      },
      "-=0.25",
    )

    .fromTo(
      ubuntu,

      {
        opacity: 0,
      },

      {
        opacity: 1,

        duration: 0.5,
      },
      "-=0.15",
    );

  /* =====================================================
       BACKGROUND PARALLAX
    ===================================================== */

  if (backgroundWord) {
    gsap.to(backgroundWord, {
      xPercent: 8,

      yPercent: -12,

      ease: "none",

      scrollTrigger: {
        trigger: section,

        start: "top bottom",

        end: "bottom top",

        scrub: 1.5,
      },
    });
  }

  /* =====================================================
       ACTION HOVER
    ===================================================== */

  actions.forEach((action) => {
    const arrow = action.querySelector("i");

    action.addEventListener("mouseenter", () => {
      if (arrow) {
        gsap.to(arrow, {
          x: 7,

          duration: 0.3,

          ease: "power2.out",
        });
      }
    });

    action.addEventListener("mouseleave", () => {
      if (arrow) {
        gsap.to(arrow, {
          x: 0,

          duration: 0.3,

          ease: "power2.out",
        });
      }
    });
  });

  /* =====================================================
       REFRESH
    ===================================================== */

  window.addEventListener("load", () => {
    ScrollTrigger.refresh();
  });
});
