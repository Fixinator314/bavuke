/* =========================================================
   BAVUKE FOUNDATION
   GET INVOLVED — VOLUNTEER
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

  const section = document.querySelector(".volunteer-section");

  const intro = document.querySelector(".volunteer-intro");

  const image = document.querySelector(".volunteer-image img");

  const statement = document.querySelector(".volunteer-statement");

  const services = document.querySelectorAll(".volunteer-service");

  const progress = document.querySelector(".volunteer-progress span");

  if (!section) {
    return;
  }

  /* =====================================================
       INTRO
    ===================================================== */

  if (intro) {
    gsap.fromTo(
      intro,

      {
        opacity: 0,
        y: 60,
      },

      {
        opacity: 1,
        y: 0,

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

  const visualElements = [image, statement, services];

  gsap.fromTo(
    visualElements,

    {
      opacity: 0,
      y: 60,
    },

    {
      opacity: 1,
      y: 0,

      duration: 0.9,

      stagger: 0.12,

      ease: "power3.out",

      scrollTrigger: {
        trigger: section,

        start: "top 60%",

        once: true,
      },
    },
  );

  /* =====================================================
       IMAGE PARALLAX
    ===================================================== */

  if (image) {
    gsap.to(
      image,

      {
        yPercent: -9,

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
       STATEMENT PARALLAX
    ===================================================== */

  if (statement) {
    gsap.to(
      statement,

      {
        y: -35,

        ease: "none",

        scrollTrigger: {
          trigger: section,

          start: "top bottom",

          end: "bottom top",

          scrub: 1.1,
        },
      },
    );
  }

  /* =====================================================
       SERVICES
    ===================================================== */

  services.forEach((service, index) => {
    service.addEventListener("mouseenter", () => {
      if (window.innerWidth <= 768) {
        return;
      }

      gsap.to(service, {
        x: 8,

        duration: 0.35,

        ease: "power2.out",
      });
    });

    service.addEventListener("mouseleave", () => {
      gsap.to(service, {
        x: 0,

        duration: 0.35,

        ease: "power2.out",
      });
    });
  });

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
