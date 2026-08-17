/* =========================================================
   BAVUKE FOUNDATION
   CONTACT — GOOGLE MAP
========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") {
    console.warn("GSAP or ScrollTrigger is not loaded.");

    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  const section = document.querySelector(".contact-location");

  const card = document.querySelector(".location-card");

  const label = document.querySelector(".location-label");

  const directions = document.querySelector(".location-directions");

  if (!section) {
    return;
  }

  /* =====================================================
       LOCATION CARD ENTRANCE
    ===================================================== */

  if (card) {
    gsap.fromTo(
      card,

      {
        opacity: 0,
        x: -70,
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
       MAP LABEL ENTRANCE
    ===================================================== */

  if (label) {
    gsap.fromTo(
      label,

      {
        opacity: 0,
        y: 20,
      },

      {
        opacity: 1,
        y: 0,

        duration: 0.6,

        delay: 0.25,

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
       BUTTON MICRO INTERACTION
    ===================================================== */

  if (directions) {
    const arrow = directions.querySelector("i");

    directions.addEventListener("mouseenter", () => {
      if (arrow) {
        gsap.to(arrow, {
          x: 4,
          y: -4,

          duration: 0.3,

          ease: "power2.out",
        });
      }
    });

    directions.addEventListener("mouseleave", () => {
      if (arrow) {
        gsap.to(arrow, {
          x: 0,
          y: 0,

          duration: 0.3,

          ease: "power2.out",
        });
      }
    });
  }

  /* =====================================================
       REFRESH
    ===================================================== */

  window.addEventListener("load", () => {
    ScrollTrigger.refresh();
  });
});
