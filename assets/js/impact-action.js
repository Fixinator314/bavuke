/* =========================================================
   BAVUKE FOUNDATION
   IMPACT — IMPACT IN ACTION
========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") {
    console.warn("GSAP or ScrollTrigger is not loaded.");

    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  /* =======================================================
     SECTION
  ======================================================= */

  const section = document.querySelector(".impact-action");

  if (!section) {
    return;
  }

  /* =======================================================
     ELEMENTS
  ======================================================= */

  const backgroundWord = section.querySelector(".impact-action-bg");

  const header = section.querySelector(".impact-action-header");

  const items = section.querySelectorAll(".impact-action-item");

  const images = section.querySelectorAll(".impact-action-image img");

  const statement = section.querySelector(".impact-action-statement");

  const arrow = section.querySelector(".impact-action-arrow");

  /* =======================================================
     HEADER REVEAL
  ======================================================= */

  gsap.fromTo(
    header,

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

  /* =======================================================
     PHOTO REVEALS
  ======================================================= */

  items.forEach((item, index) => {
    gsap.fromTo(
      item,

      {
        opacity: 0,
        y: 70,
      },

      {
        opacity: 1,
        y: 0,

        duration: 0.8,

        delay: index * 0.08,

        ease: "power3.out",

        scrollTrigger: {
          trigger: item,

          start: "top 82%",

          once: true,
        },
      },
    );
  });

  /* =======================================================
     IMAGE PARALLAX
  ======================================================= */

  images.forEach((image) => {
    gsap.to(
      image,

      {
        yPercent: -8,

        scale: 1.05,

        ease: "none",

        scrollTrigger: {
          trigger: image.closest(".impact-action-item"),

          start: "top bottom",

          end: "bottom top",

          scrub: 1.2,
        },
      },
    );
  });

  /* =======================================================
     BACKGROUND WORD PARALLAX
  ======================================================= */

  if (backgroundWord) {
    gsap.to(
      backgroundWord,

      {
        xPercent: -10,

        yPercent: -12,

        ease: "none",

        scrollTrigger: {
          trigger: section,

          start: "top bottom",

          end: "bottom top",

          scrub: 1.5,
        },
      },
    );
  }

  /* =======================================================
     STATEMENT REVEAL
  ======================================================= */

  if (statement) {
    gsap.fromTo(
      statement,

      {
        opacity: 0,

        y: 45,
      },

      {
        opacity: 1,

        y: 0,

        duration: 0.8,

        ease: "power3.out",

        scrollTrigger: {
          trigger: statement,

          start: "top 82%",

          once: true,
        },
      },
    );
  }

  /* =======================================================
     ARROW ANIMATION
  ======================================================= */

  if (arrow) {
    gsap.to(
      arrow,

      {
        y: 6,

        duration: 1.2,

        repeat: -1,

        yoyo: true,

        ease: "sine.inOut",
      },
    );
  }

  /* =======================================================
     HOVER
  ======================================================= */

  items.forEach((item) => {
    const image = item.querySelector("img");

    item.addEventListener("mouseenter", () => {
      if (image) {
        gsap.to(
          image,

          {
            scale: 1.09,

            duration: 1,

            ease: "power3.out",
          },
        );
      }
    });

    item.addEventListener("mouseleave", () => {
      if (image) {
        gsap.to(
          image,

          {
            scale: 1.05,

            duration: 1,

            ease: "power3.out",
          },
        );
      }
    });
  });

  /* =======================================================
     REFRESH
  ======================================================= */

  window.addEventListener("load", () => {
    ScrollTrigger.refresh();
  });
});
