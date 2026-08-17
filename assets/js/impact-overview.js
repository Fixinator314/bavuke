/* =========================================================
   BAVUKE FOUNDATION
   IMPACT — SECTION 02
   IMPACT AT A GLANCE
========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  // Make sure GSAP and ScrollTrigger exist
  if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") {
    console.warn("GSAP or ScrollTrigger is not loaded.");

    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  /* =======================================================
     SECTION
  ======================================================= */

  const section = document.querySelector(".impact-overview");

  if (!section) {
    return;
  }

  /* =======================================================
     ELEMENTS
  ======================================================= */

  const backgroundWord = section.querySelector(".impact-overview-bg");

  const header = section.querySelector(".impact-overview-header");

  const eyebrow = section.querySelector(".impact-section-eyebrow");

  const title = section.querySelector(".impact-overview-header h2");

  const description = section.querySelector(".impact-overview-header p");

  const pillars = section.querySelectorAll(".impact-pillar");

  const icons = section.querySelectorAll(".impact-pillar-icon");

  /* =======================================================
     INITIAL STATES

     Set these before the animation starts.
  ======================================================= */

  gsap.set(eyebrow, {
    opacity: 0,
    y: 30,
  });

  gsap.set(title, {
    opacity: 0,
    y: 60,
  });

  gsap.set(description, {
    opacity: 0,
    y: 30,
  });

  gsap.set(pillars, {
    opacity: 0,
    y: 80,
  });

  gsap.set(icons, {
    scale: 0.7,
    opacity: 0,
  });

  /* =======================================================
     SECTION INTRO ANIMATION
  ======================================================= */

  const introTimeline = gsap.timeline({
    paused: true,
  });

  introTimeline

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
      "-=0.3",
    )

    .to(
      description,
      {
        opacity: 1,
        y: 0,
        duration: 0.65,
        ease: "power3.out",
      },
      "-=0.45",
    )

    .to(
      pillars,
      {
        opacity: 1,
        y: 0,
        duration: 0.75,
        stagger: 0.15,
        ease: "power3.out",
      },
      "-=0.2",
    )

    .to(
      icons,
      {
        scale: 1,
        opacity: 1,
        duration: 0.5,
        stagger: 0.15,
        ease: "back.out(1.7)",
      },
      "-=0.45",
    );

  /* =======================================================
     TRIGGER INTRO
  ======================================================= */

  ScrollTrigger.create({
    trigger: section,

    start: "top 70%",

    once: true,

    onEnter: () => {
      introTimeline.play();
    },
  });

  /* =======================================================
     BACKGROUND WORD PARALLAX
  ======================================================= */

  if (backgroundWord) {
    gsap.to(backgroundWord, {
      xPercent: 10,

      yPercent: -12,

      ease: "none",

      scrollTrigger: {
        trigger: section,

        start: "top bottom",

        end: "bottom top",

        scrub: 1.5,
      },
    });
  }

  /* =======================================================
     PILLAR PARALLAX

     Each card moves very slightly differently,
     creating depth without making the section feel
     unstable.
  ======================================================= */

  pillars.forEach((pillar, index) => {
    gsap.to(pillar, {
      y: index === 1 ? -20 : index === 2 ? -35 : -10,

      ease: "none",

      scrollTrigger: {
        trigger: section,

        start: "top bottom",

        end: "bottom top",

        scrub: 1.2,
      },
    });
  });

  /* =======================================================
     HOVER EFFECTS
  ======================================================= */

  pillars.forEach((pillar) => {
    const icon = pillar.querySelector(".impact-pillar-icon");

    const arrow = pillar.querySelector(".impact-pillar-arrow");

    pillar.addEventListener("mouseenter", () => {
      gsap.to(icon, {
        rotate: -8,
        scale: 1.08,
        duration: 0.3,
        ease: "power2.out",
      });

      gsap.to(arrow, {
        x: 8,
        duration: 0.3,
        ease: "power2.out",
      });
    });

    pillar.addEventListener("mouseleave", () => {
      gsap.to(icon, {
        rotate: 0,
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
      });

      gsap.to(arrow, {
        x: 0,
        duration: 0.3,
        ease: "power2.out",
      });
    });
  });

  /* =======================================================
     REFRESH SCROLLTRIGGER

     Useful when images/fonts affect section height.
  ======================================================= */

  window.addEventListener("load", () => {
    ScrollTrigger.refresh();
  });
});
