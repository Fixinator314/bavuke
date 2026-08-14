/* =========================================================
   BAVUKE FOUNDATION
   ABOUT — THE RIPPLE EFFECT
========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") {
    console.warn("GSAP or ScrollTrigger is not loaded.");

    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  const section = document.querySelector(".ripple-effect");

  if (!section) {
    return;
  }

  const eyebrow = section.querySelector(".ripple-eyebrow");

  const title = section.querySelector(".ripple-intro h2");

  const description = section.querySelector(".ripple-intro p");

  const visual = section.querySelector(".ripple-visual");

  const rings = section.querySelectorAll(".ripple-ring");

  const core = section.querySelector(".ripple-core");

  const points = section.querySelectorAll(".ripple-point");

  const statement = section.querySelector(".ripple-statement");

  const background = section.querySelector(".ripple-bg-word");

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

  gsap.set(visual, {
    opacity: 0,
    scale: 0.92,
  });

  gsap.set(core, {
    scale: 0.5,
  });

  gsap.set(points, {
    opacity: 0,
    y: 25,
  });

  gsap.set(statement, {
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
     RIPPLE VISUAL
  ====================================================== */

  gsap.to(visual, {
    opacity: 1,

    scale: 1,

    duration: 1,

    ease: "power3.out",

    scrollTrigger: {
      trigger: visual,

      start: "top 80%",

      toggleActions: "play none none reverse",
    },
  });

  /* =====================================================
     CORE
  ====================================================== */

  gsap.to(core, {
    scale: 1,

    duration: 0.8,

    ease: "back.out(1.7)",

    scrollTrigger: {
      trigger: visual,

      start: "top 70%",

      toggleActions: "play none none reverse",
    },
  });

  /* =====================================================
     RINGS EXPANSION
  ====================================================== */

  rings.forEach((ring, index) => {
    gsap.fromTo(
      ring,

      {
        scale: 0.65,
        opacity: 0,
      },

      {
        scale: 1,
        opacity: 1,

        duration: 1.2,

        delay: index * 0.15,

        ease: "power2.out",

        scrollTrigger: {
          trigger: visual,

          start: "top 70%",

          toggleActions: "play none none reverse",
        },
      },
    );
  });

  /* =====================================================
     POINTS
  ====================================================== */

  gsap.to(points, {
    opacity: 1,

    y: 0,

    duration: 0.7,

    stagger: 0.18,

    ease: "power3.out",

    scrollTrigger: {
      trigger: visual,

      start: "top 60%",

      toggleActions: "play none none reverse",
    },
  });

  /* =====================================================
     SLOW RIPPLE MOTION
  ====================================================== */

  rings.forEach((ring, index) => {
    gsap.to(ring, {
      rotation: index % 2 === 0 ? 5 : -5,

      duration: 4 + index,

      repeat: -1,

      yoyo: true,

      ease: "sine.inOut",
    });
  });

  /* =====================================================
     BACKGROUND PARALLAX
  ====================================================== */

  gsap.to(background, {
    xPercent: -15,

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
     CLOSING STATEMENT
  ====================================================== */

  gsap.to(statement, {
    opacity: 1,

    y: 0,

    duration: 0.8,

    ease: "power3.out",

    scrollTrigger: {
      trigger: statement,

      start: "top 80%",

      toggleActions: "play none none reverse",
    },
  });

  window.addEventListener("load", () => {
    ScrollTrigger.refresh();
  });
});
