/* =========================================================
   BAVUKE FOUNDATION
   IMPACT — HEALTHY LIFESTYLES
========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") {
    console.warn("GSAP or ScrollTrigger is not loaded.");

    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  const section = document.querySelector(".impact-health");

  if (!section) {
    return;
  }

  /* =======================================================
     ELEMENTS
  ======================================================= */

  const backgroundWord = section.querySelector(".impact-health-bg");

  const header = section.querySelector(".impact-health-header");

  const feature = section.querySelector(".impact-health-feature");

  const image = section.querySelector(".health-feature-image");

  const featureContent = section.querySelector(".health-feature-content");

  const featureLine = section.querySelector(".health-feature-line span");

  const programmes = section.querySelectorAll(".health-programme");

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
     FEATURE REVEAL
  ======================================================= */

  gsap.fromTo(
    feature,

    {
      opacity: 0,
      y: 70,
    },

    {
      opacity: 1,
      y: 0,

      duration: 1,

      ease: "power3.out",

      scrollTrigger: {
        trigger: feature,

        start: "top 75%",

        once: true,
      },
    },
  );

  /* =======================================================
     IMAGE PARALLAX
  ======================================================= */

  if (image) {
    gsap.to(
      image,

      {
        yPercent: -7,

        scale: 1.04,

        ease: "none",

        scrollTrigger: {
          trigger: section,

          start: "top bottom",

          end: "bottom top",

          scrub: 1.3,
        },
      },
    );
  }

  /* =======================================================
     FEATURE LINE
  ======================================================= */

  if (featureLine) {
    gsap.fromTo(
      featureLine,

      {
        width: "0%",
      },

      {
        width: "40%",

        duration: 1,

        ease: "power3.out",

        scrollTrigger: {
          trigger: featureContent,

          start: "top 70%",

          once: true,
        },
      },
    );
  }

  /* =======================================================
     PROGRAMME CARDS
  ======================================================= */

  gsap.fromTo(
    programmes,

    {
      opacity: 0,
      y: 50,
    },

    {
      opacity: 1,
      y: 0,

      duration: 0.7,

      stagger: 0.12,

      ease: "power3.out",

      scrollTrigger: {
        trigger: ".health-programmes",

        start: "top 80%",

        once: true,
      },
    },
  );

  /* =======================================================
     BACKGROUND PARALLAX
  ======================================================= */

  if (backgroundWord) {
    gsap.to(
      backgroundWord,

      {
        xPercent: -8,

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
     HOVER INTERACTION
  ======================================================= */

  programmes.forEach((programme) => {
    const icon = programme.querySelector(".health-programme-top i");

    if (!icon) {
      return;
    }

    programme.addEventListener("mouseenter", () => {
      gsap.to(
        icon,

        {
          rotate: -8,

          scale: 1.15,

          duration: 0.3,

          ease: "power2.out",
        },
      );
    });

    programme.addEventListener("mouseleave", () => {
      gsap.to(
        icon,

        {
          rotate: 0,

          scale: 1,

          duration: 0.3,

          ease: "power2.out",
        },
      );
    });
  });

  /* =======================================================
     REFRESH
  ======================================================= */

  window.addEventListener("load", () => {
    ScrollTrigger.refresh();
  });
});
