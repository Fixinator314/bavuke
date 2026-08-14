/* =========================================================
   BAVUKE FOUNDATION
   ABOUT — HOW WE CREATE CHANGE
========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") {
    console.warn("GSAP or ScrollTrigger is not loaded.");

    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  const section = document.querySelector(".change-model");

  if (!section) {
    return;
  }

  const eyebrow = section.querySelector(".change-model-eyebrow");

  const title = section.querySelector(".change-model-intro h2");

  const description = section.querySelector(".change-model-intro p");

  const center = section.querySelector(".change-center");

  const nodes = section.querySelectorAll(".change-node");

  const lines = section.querySelectorAll(".change-line");

  const result = section.querySelector(".change-result");

  const background = section.querySelector(".change-model-bg");

  /* =====================================================
     INITIAL STATES
  ====================================================== */

  gsap.set(eyebrow, {
    opacity: 0,
    y: 25,
  });

  gsap.set(title, {
    opacity: 0,
    y: 70,
  });

  gsap.set(description, {
    opacity: 0,
    y: 30,
  });

  gsap.set(center, {
    opacity: 0,
    scale: 0.6,
  });

  gsap.set(nodes, {
    opacity: 0,
    y: 50,
  });

  gsap.set(lines, {
    scaleX: 0,
  });

  gsap.set(result, {
    opacity: 0,
    y: 40,
  });

  /* =====================================================
     INTRO
  ====================================================== */

  const intro = gsap.timeline({
    scrollTrigger: {
      trigger: section,

      start: "top 70%",

      toggleActions: "play none none reverse",
    },
  });

  intro

    .to(eyebrow, {
      opacity: 1,
      y: 0,

      duration: 0.5,

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
      "-=0.2",
    )

    .to(
      description,
      {
        opacity: 1,
        y: 0,

        duration: 0.6,

        ease: "power3.out",
      },
      "-=0.35",
    );

  /* =====================================================
     ECOSYSTEM
  ====================================================== */

  const ecosystemTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".change-ecosystem",

      start: "top 70%",

      toggleActions: "play none none reverse",
    },
  });

  ecosystemTimeline

    .to(center, {
      opacity: 1,

      scale: 1,

      duration: 0.8,

      ease: "back.out(1.5)",
    })

    .to(
      lines,
      {
        scaleX: 1,

        duration: 0.7,

        stagger: 0.12,

        ease: "power2.out",
      },
      "-=0.4",
    )

    .to(
      nodes,
      {
        opacity: 1,

        y: 0,

        duration: 0.7,

        stagger: 0.15,

        ease: "power3.out",
      },
      "-=0.35",
    )

    .to(
      result,
      {
        opacity: 1,

        y: 0,

        duration: 0.7,

        ease: "power3.out",
      },
      "-=0.25",
    );

  /* =====================================================
     CENTER ROTATION
  ====================================================== */

  gsap.to(center.querySelector(".change-center-ring"), {
    rotation: 360,

    duration: 20,

    repeat: -1,

    ease: "none",
  });

  /* =====================================================
     BACKGROUND PARALLAX
  ====================================================== */

  gsap.to(background, {
    xPercent: 15,

    yPercent: -20,

    ease: "none",

    scrollTrigger: {
      trigger: section,

      start: "top bottom",

      end: "bottom top",

      scrub: 1.5,
    },
  });

  /* =====================================================
     NODE FLOAT
  ====================================================== */

  nodes.forEach((node, index) => {
    gsap.to(node, {
      y: index % 2 === 0 ? -12 : 12,

      duration: 2.5 + index * 0.3,

      repeat: -1,

      yoyo: true,

      ease: "sine.inOut",
    });
  });

  window.addEventListener("load", () => {
    ScrollTrigger.refresh();
  });
});
