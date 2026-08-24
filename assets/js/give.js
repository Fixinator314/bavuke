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

  if (!section) {
    return;
  }

  const intro = section.querySelector(".give-intro");
  const centre = section.querySelector(".give-centre");
  const ring = section.querySelector(".give-centre-ring");
  const options = section.querySelectorAll(".give-option");
  const background = section.querySelector(".give-bg-word");
  const bottom = section.querySelector(".give-bottom");

  /* =======================================================
     RESPONSIVE ANIMATIONS
  ======================================================= */

  const mm = gsap.matchMedia();

  /* =======================================================
     DESKTOP
  ======================================================= */

  mm.add("(min-width: 769px)", () => {
    /* -----------------------------------------------------
       INITIAL STATES
    ----------------------------------------------------- */

    gsap.set(intro, {
      opacity: 0,
      y: 45,
    });

    gsap.set(centre, {
      opacity: 0,
      scale: 0.75,
    });

    gsap.set(options, {
      opacity: 0,
      y: 45,
    });

    gsap.set(bottom, {
      opacity: 0,
      y: 25,
    });

    /* -----------------------------------------------------
       MAIN REVEAL TIMELINE
    ----------------------------------------------------- */

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: section,

        start: "top 70%",

        end: "bottom 70%",

        scrub: 1.1,

        invalidateOnRefresh: true,
      },
    });

    timeline

      /* INTRO */

      .to(intro, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
      })

      /* CENTRE */

      .to(
        centre,
        {
          opacity: 1,
          scale: 1,
          duration: 0.9,
          ease: "back.out(1.4)",
        },
        "-=0.35",
      )

      /* CARD 01 */

      .to(
        options[0],
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
        },
        "-=0.35",
      )

      /* CARD 02 */

      .to(
        options[1],
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
        },
        "-=0.35",
      )

      /* CARD 03 */

      .to(
        options[2],
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
        },
        "-=0.35",
      )

      /* CTA */

      .to(
        bottom,
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power2.out",
        },
        "-=0.2",
      );

    /* -----------------------------------------------------
       BACKGROUND PARALLAX
    ----------------------------------------------------- */

    gsap.to(background, {
      xPercent: 12,

      yPercent: -8,

      ease: "none",

      scrollTrigger: {
        trigger: section,

        start: "top bottom",

        end: "bottom top",

        scrub: 1.5,
      },
    });

    /* -----------------------------------------------------
       CENTRE RING PULSE
    ----------------------------------------------------- */

    gsap.to(ring, {
      scale: 1.05,

      opacity: 0.55,

      duration: 2.5,

      repeat: -1,

      yoyo: true,

      ease: "sine.inOut",

      scrollTrigger: {
        trigger: section,

        start: "top 60%",

        toggleActions: "play pause resume pause",
      },
    });
  });

  /* =======================================================
     MOBILE
  ======================================================= */

  mm.add("(max-width: 768px)", () => {
    /* -----------------------------------------------------
       INTRO
    ----------------------------------------------------- */

    gsap.fromTo(
      intro,
      {
        opacity: 0,
        y: 35,
      },
      {
        opacity: 1,

        y: 0,

        duration: 0.8,

        ease: "power2.out",

        scrollTrigger: {
          trigger: intro,

          start: "top 82%",

          toggleActions: "play none none reverse",
        },
      },
    );

    /* -----------------------------------------------------
       CENTRE
    ----------------------------------------------------- */

    gsap.fromTo(
      centre,
      {
        opacity: 0,
        scale: 0.75,
      },
      {
        opacity: 1,

        scale: 1,

        duration: 0.8,

        ease: "back.out(1.4)",

        scrollTrigger: {
          trigger: centre,

          start: "top 85%",

          toggleActions: "play none none reverse",
        },
      },
    );

    /* -----------------------------------------------------
       CARDS
    ----------------------------------------------------- */

    options.forEach((option) => {
      gsap.fromTo(
        option,
        {
          opacity: 0,

          y: 30,
        },
        {
          opacity: 1,

          y: 0,

          duration: 0.65,

          ease: "power2.out",

          scrollTrigger: {
            trigger: option,

            start: "top 88%",

            toggleActions: "play none none reverse",
          },
        },
      );
    });

    /* -----------------------------------------------------
       CTA
    ----------------------------------------------------- */

    gsap.fromTo(
      bottom,
      {
        opacity: 0,

        y: 25,
      },
      {
        opacity: 1,

        y: 0,

        duration: 0.65,

        ease: "power2.out",

        scrollTrigger: {
          trigger: bottom,

          start: "top 90%",

          toggleActions: "play none none reverse",
        },
      },
    );

    /* -----------------------------------------------------
       MOBILE RING PULSE
    ----------------------------------------------------- */

    gsap.to(ring, {
      scale: 1.05,

      opacity: 0.55,

      duration: 2.5,

      repeat: -1,

      yoyo: true,

      ease: "sine.inOut",

      scrollTrigger: {
        trigger: centre,

        start: "top 70%",

        toggleActions: "play pause resume pause",
      },
    });
  });

  /* =======================================================
     REFRESH SCROLLTRIGGER
  ======================================================= */

  window.addEventListener("load", () => {
    ScrollTrigger.refresh();
  });
});
