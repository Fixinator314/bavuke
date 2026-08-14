/* =========================================================
   BAVUKE FOUNDATION
   GIVE / GET INVOLVED
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

  const section = document.querySelector(".give-section");

  const intro = document.querySelector(".give-intro");

  const centre = document.querySelector(".give-centre");

  const ring = document.querySelector(".give-centre-ring");

  const options = gsap.utils.toArray(".give-option");

  const background = document.querySelector(".give-bg-word");

  const bottom = document.querySelector(".give-bottom");

  if (!section) {
    return;
  }

  /* =======================================================
     DESKTOP ANIMATION
  ======================================================= */

  const mm = gsap.matchMedia();

  mm.add("(min-width: 769px)", () => {
    /* ===================================================
         INITIAL STATES
      =================================================== */

    gsap.set(intro, {
      opacity: 0,
      y: 50,
    });

    gsap.set(centre, {
      scale: 0.5,
      opacity: 0,
    });

    gsap.set(ring, {
      scale: 0.7,
      rotation: -45,
    });

    gsap.set(options, {
      opacity: 0,
      y: 40,
    });

    gsap.set(bottom, {
      opacity: 0,
      y: 25,
    });

    /* ===================================================
         MAIN TIMELINE
      =================================================== */

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: section,

        start: "top 65%",

        end: "bottom 75%",

        scrub: 1,
      },
    });

    timeline

      /* Intro */

      .to(intro, {
        opacity: 1,
        y: 0,
        duration: 1,
      })

      /* Centre */

      .to(
        centre,
        {
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: "back.out(1.5)",
        },
        "-=0.4",
      )

      /* Ring */

      .to(
        ring,
        {
          scale: 1,
          rotation: 0,
          duration: 1.2,
          ease: "power2.out",
        },
        "-=1",
      )

      /* Options */

      .to(options[0], {
        opacity: 1,
        y: 0,
        duration: 0.8,
      })

      .to(
        options[1],
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
        },
        "-=0.5",
      )

      .to(
        options[2],
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
        },
        "-=0.5",
      )

      /* Bottom CTA */

      .to(
        bottom,
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
        },
        "-=0.3",
      );

    /* ===================================================
         BACKGROUND PARALLAX
      =================================================== */

    gsap.to(background, {
      xPercent: 15,

      yPercent: -10,

      ease: "none",

      scrollTrigger: {
        trigger: section,

        start: "top bottom",

        end: "bottom top",

        scrub: 1.5,
      },
    });

    /* ===================================================
         CENTRE PULSE
      =================================================== */

    gsap.to(".give-centre-ring", {
      scale: 1.08,

      opacity: 0.5,

      duration: 2.5,

      repeat: -1,

      yoyo: true,

      ease: "sine.inOut",
    });
  });

  /* =======================================================
     MOBILE
  ======================================================= */

  mm.add("(max-width: 768px)", () => {
    gsap.fromTo(
      ".give-intro",
      {
        opacity: 0,
        y: 40,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,

        scrollTrigger: {
          trigger: section,

          start: "top 80%",

          toggleActions: "play none none reverse",
        },
      },
    );

    gsap.fromTo(
      ".give-centre",
      {
        opacity: 0,
        scale: 0.7,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 0.8,

        scrollTrigger: {
          trigger: ".give-centre",

          start: "top 80%",

          toggleActions: "play none none reverse",
        },
      },
    );
  });
});
