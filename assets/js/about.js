/* =========================================================
   BAVUKE FOUNDATION
   ABOUT PREVIEW ANIMATIONS
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

  const section = document.querySelector(".about-preview");

  const image = document.querySelector(".about-preview-image img");

  const eyebrow = document.querySelector(".about-preview-eyebrow");

  const title = document.querySelector(".about-preview-title");

  const line = document.querySelector(".about-preview-line");

  const lead = document.querySelector(".about-preview-lead");

  const text = document.querySelector(".about-preview-text");

  const link = document.querySelector(".about-preview-link");

  const backgroundWord = document.querySelector(
    ".about-preview-background-word",
  );

  const sectionNumber = document.querySelector(".about-preview-number");

  if (!section) {
    return;
  }

  /* =======================================================
     CONTENT REVEAL
  ======================================================= */

  const reveal = gsap.timeline({
    scrollTrigger: {
      trigger: section,

      start: "top 70%",

      toggleActions: "play none none reverse",
    },
  });

  reveal

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
      line,
      {
        width: 65,
        duration: 0.6,
        ease: "power2.out",
      },
      "-=0.4",
    )

    .to(
      lead,
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: "power3.out",
      },
      "-=0.25",
    )

    .to(
      text,
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: "power3.out",
      },
      "-=0.4",
    )

    .to(
      link,
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power3.out",
      },
      "-=0.35",
    )

    .to(
      sectionNumber,
      {
        opacity: 1,
        duration: 0.4,
      },
      "-=0.4",
    );

  /* =======================================================
     IMAGE PARALLAX
  ======================================================= */

  gsap.to(image, {
    yPercent: -8,

    scale: 1.05,

    ease: "none",

    scrollTrigger: {
      trigger: section,

      start: "top bottom",

      end: "bottom top",

      scrub: 1,
    },
  });

  /* =======================================================
     BACKGROUND WORD PARALLAX
  ======================================================= */

  gsap.to(backgroundWord, {
    xPercent: -8,

    yPercent: -15,

    ease: "none",

    scrollTrigger: {
      trigger: section,

      start: "top bottom",

      end: "bottom top",

      scrub: 1.5,
    },
  });

  /* =======================================================
     SECTION NUMBER
  ======================================================= */

  gsap.to(sectionNumber, {
    y: -60,

    opacity: 0.15,

    ease: "none",

    scrollTrigger: {
      trigger: section,

      start: "top center",

      end: "bottom top",

      scrub: true,
    },
  });
});
