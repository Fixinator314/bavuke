/* =========================================================
   BAVUKE FOUNDATION
   UBUNTU ANIMATION
========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") {
    console.warn("GSAP or ScrollTrigger is not loaded.");

    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  /* =======================================================
     ELEMENTS
  ======================================================= */

  const section = document.querySelector(".ubuntu-section");

  const backgroundText = document.querySelector(".ubuntu-background-text");

  const eyebrow = document.querySelector(".ubuntu-eyebrow");

  const symbol = document.querySelector(".ubuntu-symbol");

  const symbolCircle = document.querySelector(".ubuntu-symbol-circle");

  const symbolDots = document.querySelectorAll(".ubuntu-symbol span");

  const title = document.querySelector(".ubuntu-title");

  const divider = document.querySelector(".ubuntu-divider");

  const quote = document.querySelector(".ubuntu-quote");

  const description = document.querySelector(".ubuntu-description");

  const number = document.querySelector(".ubuntu-scroll-number");

  if (!section) {
    return;
  }

  /* =======================================================
     INTRO TIMELINE
  ======================================================= */

  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: section,

      start: "top 75%",

      end: "center center",

      toggleActions: "play none none reverse",
    },
  });

  timeline

    /* Eyebrow */

    .to(eyebrow, {
      opacity: 1,
      duration: 0.6,
      ease: "power2.out",
    })

    /* Symbol */

    .to(
      symbolCircle,
      {
        opacity: 1,
        scale: 1,
        duration: 0.7,
        ease: "back.out(1.7)",
      },
      "-=0.3",
    )

    /* Symbol dots */

    .to(
      symbolDots,
      {
        opacity: 1,
        scale: 1,
        duration: 0.5,
        stagger: 0.1,
        ease: "back.out(1.7)",
      },
      "-=0.4",
    )

    /* Title */

    .to(
      title,
      {
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
      },
      "-=0.2",
    )

    /* Yellow line */

    .to(
      divider,
      {
        width: 70,
        duration: 0.7,
        ease: "power2.out",
      },
      "-=0.35",
    )

    /* Quote */

    .to(
      quote,
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: "power3.out",
      },
      "-=0.25",
    )

    /* Description */

    .to(
      description,
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: "power3.out",
      },
      "-=0.35",
    )

    /* Section number */

    .to(
      number,
      {
        opacity: 1,
        duration: 0.4,
      },
      "-=0.3",
    );

  /* =======================================================
     BACKGROUND PARALLAX
  ======================================================= */

  gsap.to(backgroundText, {
    yPercent: -20,

    ease: "none",

    scrollTrigger: {
      trigger: section,

      start: "top bottom",

      end: "bottom top",

      scrub: 1,
    },
  });

  /* =======================================================
     CONTENT PARALLAX
  ======================================================= */

  gsap.to(".ubuntu-content", {
    yPercent: -8,

    ease: "none",

    scrollTrigger: {
      trigger: section,

      start: "top bottom",

      end: "bottom top",

      scrub: 1,
    },
  });

  /* =======================================================
     SECTION NUMBER
  ======================================================= */

  gsap.to(number, {
    y: -40,

    opacity: 0.25,

    ease: "none",

    scrollTrigger: {
      trigger: section,

      start: "top center",

      end: "bottom top",

      scrub: true,
    },
  });
});
