/* =========================================================
   BAVUKE FOUNDATION
   HERO ANIMATIONS
========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  /* =======================================================
     CHECK GSAP
  ======================================================= */

  if (typeof gsap === "undefined") {
    console.warn("GSAP is not loaded.");
    return;
  }

  /* =======================================================
     REGISTER SCROLL TRIGGER
  ======================================================= */

  if (typeof ScrollTrigger !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
  }

  /* =======================================================
     HERO ELEMENTS
  ======================================================= */

  const hero = document.querySelector(".hero");

  const background = document.querySelector(".hero-background");

  const eyebrow = document.querySelector(".hero-eyebrow");

  const titleLines = document.querySelectorAll(".hero-title-line");

  const heroLine = document.querySelector(".hero-line");

  const description = document.querySelector(".hero-description");

  const buttons = document.querySelector(".hero-buttons");

  const scrollIndicator = document.querySelector(".hero-scroll");

  const heroNumber = document.querySelector(".hero-number");

  if (!hero) {
    return;
  }

  /* =======================================================
     HERO INTRO TIMELINE
  ======================================================= */

  const heroIntro = gsap.timeline({
    defaults: {
      ease: "power3.out",
    },
  });

  heroIntro
    .to(eyebrow, {
      opacity: 1,
      duration: 0.7,
    })

    .to(
      titleLines,
      {
        opacity: 1,
        y: "0%",
        duration: 1,
        stagger: 0.12,
      },
      "-=0.35",
    )

    .to(
      heroLine,
      {
        width: 65,
        duration: 0.7,
        ease: "power2.out",
      },
      "-=0.35",
    )

    .to(
      description,
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
      },
      "-=0.35",
    )

    .to(
      buttons,
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
      },
      "-=0.4",
    )

    .to(
      scrollIndicator,
      {
        opacity: 1,
        duration: 0.6,
      },
      "-=0.2",
    )

    .to(
      heroNumber,
      {
        opacity: 1,
        duration: 0.5,
      },
      "<",
    );

  /* =======================================================
     HERO PARALLAX
  ======================================================= */

  if (background && typeof ScrollTrigger !== "undefined") {
    gsap.to(background, {
      yPercent: 12,

      scale: 1.12,

      ease: "none",

      scrollTrigger: {
        trigger: hero,

        start: "top top",

        end: "bottom top",

        scrub: true,
      },
    });
  }

  /* =======================================================
     HERO CONTENT SCROLL
  ======================================================= */

  if (typeof ScrollTrigger !== "undefined") {
    gsap.to(".hero-content", {
      yPercent: -18,

      opacity: 0.25,

      ease: "none",

      scrollTrigger: {
        trigger: hero,

        start: "top top",

        end: "70% top",

        scrub: true,
      },
    });

    /* =====================================================
       SCROLL INDICATOR
    ===================================================== */

    gsap.to(scrollIndicator, {
      opacity: 0,

      y: 20,

      ease: "none",

      scrollTrigger: {
        trigger: hero,

        start: "top top",

        end: "25% top",

        scrub: true,
      },
    });

    /* =====================================================
       HERO NUMBER
    ===================================================== */

    gsap.to(heroNumber, {
      opacity: 0,

      ease: "none",

      scrollTrigger: {
        trigger: hero,

        start: "top top",

        end: "30% top",

        scrub: true,
      },
    });
  }
});
