/* =========================================================
   BAVUKE FOUNDATION
   ABOUT — VISION & MISSION
========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") {
    console.warn("GSAP or ScrollTrigger is not loaded.");

    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  const section = document.querySelector(".vision-mission");

  if (!section) {
    return;
  }

  const eyebrow = section.querySelector(".vision-mission-eyebrow");

  const title = section.querySelector(".vision-mission-intro h2");

  const line = section.querySelector(".vision-mission-line");

  const mission = section.querySelector(".mission-block");

  const missionStatement = section.querySelector(".mission-statement");

  const missionUnderline = section.querySelector(".mission-underline");

  const ubuntu = section.querySelector(".ubuntu-block");

  const background = section.querySelector(".vision-mission-bg");

  /* =====================================================
       INITIAL STATES
    ====================================================== */

  gsap.set(eyebrow, {
    opacity: 0,
    y: 25,
  });

  gsap.set(title, {
    opacity: 0,
    y: 80,
  });

  gsap.set(line, {
    scaleX: 0,
  });

  gsap.set(mission, {
    opacity: 0,
    y: 70,
  });

  gsap.set(missionStatement, {
    opacity: 0,
    y: 50,
  });

  gsap.set(missionUnderline, {
    scaleX: 0,
    transformOrigin: "left center",
  });

  gsap.set(ubuntu, {
    opacity: 0,
    y: 80,
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

      duration: 0.6,

      ease: "power3.out",
    })

    .to(
      title,
      {
        opacity: 1,
        y: 0,

        duration: 1,

        ease: "power3.out",
      },
      "-=0.25",
    )

    .to(
      line,
      {
        scaleX: 1,

        duration: 0.7,

        ease: "power3.out",
      },
      "-=0.4",
    );

  /* =====================================================
       MISSION
    ====================================================== */

  gsap.to(mission, {
    opacity: 1,

    y: 0,

    duration: 0.9,

    ease: "power3.out",

    scrollTrigger: {
      trigger: mission,

      start: "top 75%",

      toggleActions: "play none none reverse",
    },
  });

  gsap.to(missionStatement, {
    opacity: 1,

    y: 0,

    duration: 1,

    ease: "power3.out",

    scrollTrigger: {
      trigger: missionStatement,

      start: "top 78%",

      toggleActions: "play none none reverse",
    },
  });

  gsap.to(missionUnderline, {
    scaleX: 1,

    duration: 1,

    ease: "power3.out",

    scrollTrigger: {
      trigger: missionUnderline,

      start: "top 85%",

      toggleActions: "play none none reverse",
    },
  });

  /* =====================================================
       UBUNTU
    ====================================================== */

  gsap.to(ubuntu, {
    opacity: 1,

    y: 0,

    duration: 1,

    ease: "power3.out",

    scrollTrigger: {
      trigger: ubuntu,

      start: "top 78%",

      toggleActions: "play none none reverse",
    },
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
});
