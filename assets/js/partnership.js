/* =========================================================
   BAVUKE FOUNDATION
   GET INVOLVED — PARTNERSHIPS
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

  const section = document.querySelector(".partnership-section");

  const heading = document.querySelector(".partnership-heading");

  const image = document.querySelector(".partnership-image img");

  const pathway = document.querySelector(".partnership-pathway");

  const steps = document.querySelectorAll(".partnership-step");

  const button = document.querySelector(".partnership-button");

  const progress = document.querySelector(".partnership-line span");

  if (!section) {
    return;
  }

  /* =====================================================
       HEADING ENTRANCE
    ===================================================== */

  if (heading) {
    gsap.fromTo(
      heading,

      {
        opacity: 0,
        x: -60,
      },

      {
        opacity: 1,
        x: 0,

        duration: 0.9,

        ease: "power3.out",

        scrollTrigger: {
          trigger: section,

          start: "top 70%",

          once: true,
        },
      },
    );
  }

  /* =====================================================
       IMAGE ENTRANCE
    ===================================================== */

  if (image) {
    gsap.fromTo(
      image,

      {
        opacity: 0,
        scale: 1.12,
      },

      {
        opacity: 1,
        scale: 1,

        duration: 1.1,

        ease: "power3.out",

        scrollTrigger: {
          trigger: section,

          start: "top 65%",

          once: true,
        },
      },
    );

    /* ---------------------------------------------
         IMAGE PARALLAX
      --------------------------------------------- */

    gsap.to(
      image,

      {
        yPercent: -8,

        scale: 1.06,

        ease: "none",

        scrollTrigger: {
          trigger: section,

          start: "top bottom",

          end: "bottom top",

          scrub: 1,
        },
      },
    );
  }

  /* =====================================================
       PATHWAY ENTRANCE
    ===================================================== */

  if (pathway) {
    gsap.fromTo(
      pathway,

      {
        opacity: 0,
        y: 70,
      },

      {
        opacity: 1,
        y: 0,

        duration: 0.9,

        ease: "power3.out",

        scrollTrigger: {
          trigger: section,

          start: "top 60%",

          once: true,
        },
      },
    );
  }

  /* =====================================================
       STEP ENTRANCES
    ===================================================== */

  if (steps.length) {
    gsap.fromTo(
      steps,

      {
        opacity: 0,
        x: 35,
      },

      {
        opacity: 1,
        x: 0,

        duration: 0.65,

        stagger: 0.12,

        ease: "power3.out",

        scrollTrigger: {
          trigger: pathway,

          start: "top 75%",

          once: true,
        },
      },
    );
  }

  /* =====================================================
       BUTTON
    ===================================================== */

  if (button) {
    gsap.fromTo(
      button,

      {
        opacity: 0,
        y: 20,
      },

      {
        opacity: 1,
        y: 0,

        duration: 0.6,

        ease: "power3.out",

        scrollTrigger: {
          trigger: button,

          start: "top 90%",

          once: true,
        },
      },
    );
  }

  /* =====================================================
       PROGRESS
    ===================================================== */

  if (progress) {
    gsap.to(
      progress,

      {
        xPercent: 185,

        duration: 1.5,

        repeat: -1,

        ease: "none",
      },
    );
  }

  /* =====================================================
       REFRESH
    ===================================================== */

  window.addEventListener("load", () => {
    ScrollTrigger.refresh();
  });
});
