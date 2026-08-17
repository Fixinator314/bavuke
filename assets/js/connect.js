/* =========================================================
   BAVUKE FOUNDATION
   CONTACT — WAYS TO CONNECT
========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") {
    console.warn("GSAP or ScrollTrigger is not loaded.");

    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  const section = document.querySelector(".connect-section");

  const intro = document.querySelector(".connect-intro");

  const items = document.querySelectorAll(".connect-item");

  const line = document.querySelector(".connect-line span");

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
       CONNECTION ITEMS
    ===================================================== */

  if (items.length) {
    gsap.fromTo(
      items,
      {
        opacity: 0,
        x: 60,
      },
      {
        opacity: 1,
        x: 0,

        duration: 0.7,

        stagger: 0.14,

        ease: "power3.out",

        scrollTrigger: {
          trigger: items[0],

          start: "top 80%",

          once: true,
        },
      },
    );

    /* ---------------------------------------------
         HOVER MICRO-INTERACTION
      --------------------------------------------- */

    items.forEach((item) => {
      const icon = item.querySelector(".connect-item-icon");

      const arrow = item.querySelector(".connect-item-arrow");

      item.addEventListener("mouseenter", () => {
        if (window.innerWidth <= 768) {
          return;
        }

        if (icon) {
          gsap.to(icon, {
            rotation: -6,
            duration: 0.35,
            ease: "power2.out",
          });
        }

        if (arrow) {
          gsap.to(arrow, {
            x: 8,
            duration: 0.35,
            ease: "power2.out",
          });
        }
      });

      item.addEventListener("mouseleave", () => {
        if (icon) {
          gsap.to(icon, {
            rotation: 0,
            duration: 0.35,
            ease: "power2.out",
          });
        }

        if (arrow) {
          gsap.to(arrow, {
            x: 0,
            duration: 0.35,
            ease: "power2.out",
          });
        }
      });
    });
  }

  /* =====================================================
       UBUNTU LINE
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
       REFRESH
    ===================================================== */

  window.addEventListener("load", () => {
    ScrollTrigger.refresh();
  });
});
