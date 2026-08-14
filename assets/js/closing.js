/* =========================================================
   BAVUKE FOUNDATION
   CLOSING CTA
========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") {
    console.warn("GSAP or ScrollTrigger is not loaded.");

    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  const section = document.querySelector(".closing-section");

  const eyebrow = document.querySelector(".closing-eyebrow");

  const title = document.querySelector(".closing-content h2");

  const description = document.querySelector(".closing-content p");

  const button = document.querySelector(".closing-button");

  const circle = document.querySelector(".closing-circle");

  const background = document.querySelector(".closing-bg-word");

  if (!section) {
    return;
  }

  /* =======================================================
     INTRO
  ======================================================= */

  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: section,

      start: "top 70%",

      toggleActions: "play none none reverse",
    },
  });

  timeline

    .to(eyebrow, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: "power3.out",
    })

    .to(
      title,
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: "power3.out",
      },
      "-=0.25",
    )

    .to(
      description,
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power3.out",
      },
      "-=0.3",
    )

    .to(
      button,
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power3.out",
      },
      "-=0.25",
    );

  /* =======================================================
     CIRCLE ROTATION
  ======================================================= */

  gsap.to(circle, {
    rotation: 360,

    duration: 30,

    repeat: -1,

    ease: "none",
  });

  /* =======================================================
     BACKGROUND PARALLAX
  ======================================================= */

  gsap.to(background, {
    yPercent: -20,

    xPercent: 8,

    ease: "none",

    scrollTrigger: {
      trigger: section,

      start: "top bottom",

      end: "bottom top",

      scrub: 1.5,
    },
  });
});
