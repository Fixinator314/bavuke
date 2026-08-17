/* =========================================================
   BAVUKE FOUNDATION
   GET INVOLVED — GIVE
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

  const section = document.querySelector(".give-section");

  const content = document.querySelector(".give-content");

  const visual = document.querySelector(".give-visual");

  const image = document.querySelector(".give-image img");

  const visualCard = document.querySelector(".give-visual-card");

  const options = document.querySelectorAll(".give-option");

  const button = document.querySelector(".give-button");

  if (!section) {
    return;
  }

  /* =====================================================
       INTRO
    ===================================================== */

  gsap.fromTo(
    content,
    {
      opacity: 0,
      x: -70,
    },
    {
      opacity: 1,
      x: 0,

      duration: 1,

      ease: "power3.out",

      scrollTrigger: {
        trigger: section,

        start: "top 70%",

        once: true,
      },
    },
  );

  /* =====================================================
       VISUAL
    ===================================================== */

  if (visual) {
    gsap.fromTo(
      visual,
      {
        opacity: 0,
        x: 70,
      },
      {
        opacity: 1,
        x: 0,

        duration: 1.1,

        ease: "power3.out",

        scrollTrigger: {
          trigger: section,

          start: "top 65%",

          once: true,
        },
      },
    );
  }

  /* =====================================================
       OPTIONS
    ===================================================== */

  if (options.length) {
    gsap.fromTo(
      options,
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,

        duration: 0.7,

        stagger: 0.15,

        ease: "power3.out",

        scrollTrigger: {
          trigger: options[0],

          start: "top 80%",

          once: true,
        },
      },
    );
  }

  /* =====================================================
       IMAGE PARALLAX
    ===================================================== */

  if (image) {
    gsap.to(image, {
      yPercent: -10,

      scale: 1.06,

      ease: "none",

      scrollTrigger: {
        trigger: section,

        start: "top bottom",

        end: "bottom top",

        scrub: 1,
      },
    });
  }

  /* =====================================================
       UBUNTU CARD PARALLAX
    ===================================================== */

  if (visualCard) {
    gsap.to(visualCard, {
      y: -45,

      ease: "none",

      scrollTrigger: {
        trigger: section,

        start: "top bottom",

        end: "bottom top",

        scrub: 1.2,
      },
    });
  }

  /* =====================================================
       CTA
    ===================================================== */

  if (button) {
    gsap.fromTo(
      button,
      {
        opacity: 0,
        y: 25,
      },
      {
        opacity: 1,
        y: 0,

        duration: 0.7,

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
       REFRESH
    ===================================================== */

  window.addEventListener("load", () => {
    ScrollTrigger.refresh();
  });
});
