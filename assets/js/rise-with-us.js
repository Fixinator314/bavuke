/* =========================================================
   BAVUKE FOUNDATION
   ABOUT — RISE WITH US
========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") {
    console.warn("GSAP or ScrollTrigger is not loaded.");

    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  const section = document.querySelector(".rise-with-us");

  if (!section) {
    return;
  }

  const eyebrow = section.querySelector(".rise-eyebrow");

  const title = section.querySelector(".rise-title");

  const description = section.querySelector(".rise-description");

  const actions = section.querySelector(".rise-actions");

  const ubuntu = section.querySelector(".rise-ubuntu");

  const backgroundOne = section.querySelector(".rise-bg-word");

  const backgroundTwo = section.querySelector(".rise-bg-word-two");

  /* =====================================================
     INITIAL STATES
  ====================================================== */

  gsap.set(eyebrow, {
    opacity: 0,
    y: 20,
  });

  gsap.set(title, {
    opacity: 0,
    y: 35,
  });

  gsap.set(description, {
    opacity: 0,
    y: 20,
  });

  gsap.set(actions, {
    opacity: 0,
    y: 20,
  });

  gsap.set(ubuntu, {
    opacity: 0,
    y: 20,
  });

  /* =====================================================
     MAIN REVEAL
  ====================================================== */

  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: section,

      start: "top 75%",

      toggleActions: "play none none reverse",
    },
  });

  timeline

    .to(eyebrow, {
      opacity: 1,

      y: 0,

      duration: 0.45,

      ease: "power3.out",
    })

    .to(
      title,
      {
        opacity: 1,

        y: 0,

        duration: 0.7,

        ease: "power3.out",
      },
      "-=0.15",
    )

    .to(
      description,
      {
        opacity: 1,

        y: 0,

        duration: 0.5,

        ease: "power3.out",
      },
      "-=0.25",
    )

    .to(
      actions,
      {
        opacity: 1,

        y: 0,

        duration: 0.45,

        ease: "power3.out",
      },
      "-=0.2",
    )

    .to(
      ubuntu,
      {
        opacity: 1,

        y: 0,

        duration: 0.5,

        ease: "power3.out",
      },
      "-=0.15",
    );

  /* =====================================================
     BACKGROUND PARALLAX
  ====================================================== */

  gsap.to(backgroundOne, {
    xPercent: 18,

    yPercent: -15,

    ease: "none",

    scrollTrigger: {
      trigger: section,

      start: "top bottom",

      end: "bottom top",

      scrub: 1.5,
    },
  });

  gsap.to(backgroundTwo, {
    xPercent: -20,

    yPercent: 12,

    ease: "none",

    scrollTrigger: {
      trigger: section,

      start: "top bottom",

      end: "bottom top",

      scrub: 2,
    },
  });

  /* =====================================================
     REFRESH
  ====================================================== */

  window.addEventListener("load", () => {
    ScrollTrigger.refresh();
  });
});
