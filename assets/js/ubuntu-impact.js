/* =========================================================
   BAVUKE FOUNDATION
   IMPACT — UBUNTU IN ACTION
========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  /* =======================================================
     GSAP CHECK
  ======================================================= */

  if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") {
    console.warn("GSAP or ScrollTrigger is not loaded.");

    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  /* =======================================================
     SECTION
  ======================================================= */

  const section = document.querySelector(".ubuntu-impact");

  if (!section) {
    return;
  }

  /* =======================================================
     ELEMENTS
  ======================================================= */

  const image = section.querySelector(".ubuntu-impact-image img");

  const backgroundWord = section.querySelector(".ubuntu-impact-bg");

  const eyebrow = section.querySelector(".impact-section-eyebrow");

  const title = section.querySelector(".ubuntu-impact-content h2");

  const line = section.querySelector(".ubuntu-impact-line");

  const description = section.querySelector(".ubuntu-impact-content p");

  const link = section.querySelector(".ubuntu-impact-link");

  const bottom = section.querySelector(".ubuntu-impact-bottom");

  const scrollLine = section.querySelector(".ubuntu-impact-scroll-line span");

  /* =======================================================
     INITIAL STATES
  ======================================================= */

  gsap.set([eyebrow, title, line, description, link], {
    opacity: 0,
    y: 45,
  });

  gsap.set(bottom, {
    opacity: 0,
  });

  /* =======================================================
     INTRO TIMELINE
  ======================================================= */

  const intro = gsap.timeline({
    paused: true,
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

        duration: 0.9,

        ease: "power3.out",
      },
      "-=0.25",
    )

    .to(
      line,
      {
        opacity: 1,
        y: 0,

        width: 80,

        duration: 0.45,

        ease: "power2.out",
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
      "-=0.15",
    )

    .to(
      link,
      {
        opacity: 1,
        y: 0,

        duration: 0.55,

        ease: "power3.out",
      },
      "-=0.2",
    )

    .to(
      bottom,
      {
        opacity: 1,

        duration: 0.4,
      },
      "-=0.15",
    );

  /* =======================================================
     START INTRO
  ======================================================= */

  ScrollTrigger.create({
    trigger: section,

    start: "top 65%",

    once: true,

    onEnter: () => {
      intro.play();
    },
  });

  /* =======================================================
     IMAGE PARALLAX
  ======================================================= */

  if (image) {
    gsap.to(image, {
      yPercent: -8,

      scale: 1.08,

      ease: "none",

      scrollTrigger: {
        trigger: section,

        start: "top bottom",

        end: "bottom top",

        scrub: 1.3,
      },
    });
  }

  /* =======================================================
     BACKGROUND WORD PARALLAX
  ======================================================= */

  if (backgroundWord) {
    gsap.to(backgroundWord, {
      xPercent: -10,

      yPercent: -15,

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
     CONTENT EXIT
  ======================================================= */

  gsap.to([eyebrow, title, line, description, link], {
    y: -50,

    opacity: 0.25,

    ease: "none",

    scrollTrigger: {
      trigger: section,

      start: "top top",

      end: "bottom top",

      scrub: 1,
    },
  });

  /* =======================================================
     SCROLL LINE
  ======================================================= */

  if (scrollLine) {
    gsap.to(scrollLine, {
      xPercent: 230,

      duration: 1.5,

      repeat: -1,

      ease: "none",
    });
  }

  /* =======================================================
     CTA HOVER
  ======================================================= */

  if (link) {
    const arrow = link.querySelector("i");

    link.addEventListener("mouseenter", () => {
      if (arrow) {
        gsap.to(arrow, {
          x: 6,

          duration: 0.3,

          ease: "power2.out",
        });
      }
    });

    link.addEventListener("mouseleave", () => {
      if (arrow) {
        gsap.to(arrow, {
          x: 0,

          duration: 0.3,

          ease: "power2.out",
        });
      }
    });
  }

  /* =======================================================
     REFRESH
  ======================================================= */

  window.addEventListener("load", () => {
    ScrollTrigger.refresh();
  });
});
