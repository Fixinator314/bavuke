/* =========================================================
   BAVUKE FOUNDATION
   SHARED INNER PAGE HERO
========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") {
    console.warn("GSAP or ScrollTrigger is not loaded.");
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  const heroes = document.querySelectorAll(".inner-page-hero");

  if (!heroes.length) {
    return;
  }

  heroes.forEach((hero) => {
    /* =====================================================
       ELEMENTS
    ====================================================== */

    const image = hero.querySelector(".inner-page-hero-image img");

    const word = hero.querySelector(".inner-page-hero-word");

    const eyebrow = hero.querySelector(".inner-page-hero-eyebrow");

    const title = hero.querySelector(".inner-page-hero-content h1");

    const description = hero.querySelector(".inner-page-hero-content p");

    const bottom = hero.querySelector(".inner-page-hero-bottom");

    const scrollLine = hero.querySelector(".inner-page-scroll-line span");

    /* =====================================================
       INITIAL STATES

       GSAP controls these.
       CSS should NOT control opacity/transform.
    ====================================================== */

    gsap.set(eyebrow, {
      opacity: 0,
      y: 18,
    });

    gsap.set(title, {
      opacity: 0,
      y: 28,
    });

    gsap.set(description, {
      opacity: 0,
      y: 18,
    });

    gsap.set(bottom, {
      opacity: 0,
    });

    /* =====================================================
       HERO INTRO

       THIS ONLY PLAYS ONCE.

       It is NOT connected to ScrollTrigger.
    ====================================================== */

    const intro = gsap.timeline({
      defaults: {
        ease: "power3.out",
      },
    });

    intro

      .to(eyebrow, {
        opacity: 1,

        y: 0,

        duration: 0.45,
      })

      .to(
        title,
        {
          opacity: 1,

          y: 0,

          duration: 0.7,
        },
        "-=0.15",
      )

      .to(
        description,
        {
          opacity: 1,

          y: 0,

          duration: 0.5,
        },
        "-=0.25",
      )

      .to(
        bottom,
        {
          opacity: 1,

          duration: 0.4,
        },
        "-=0.15",
      );

    /* =====================================================
       IMAGE PARALLAX

       ONLY THE IMAGE MOVES WITH SCROLL.
    ====================================================== */

    if (image) {
      gsap.to(image, {
        yPercent: -8,

        scale: 1.04,

        ease: "none",

        scrollTrigger: {
          trigger: hero,

          start: "top top",

          end: "bottom top",

          scrub: 1.2,
        },
      });
    }

    /* =====================================================
       LARGE BACKGROUND WORD

       ALSO SCROLL BASED.
    ====================================================== */

    if (word) {
      gsap.to(word, {
        xPercent: 10,

        yPercent: -10,

        ease: "none",

        scrollTrigger: {
          trigger: hero,

          start: "top top",

          end: "bottom top",

          scrub: 1.5,
        },
      });
    }

    /* =====================================================
       SCROLL INDICATOR

       LOOPING ANIMATION.
    ====================================================== */

    if (scrollLine) {
      gsap.to(scrollLine, {
        xPercent: 230,

        duration: 1.5,

        repeat: -1,

        ease: "none",
      });
    }
  });

  /* =======================================================
     REFRESH AFTER EVERYTHING IS LOADED
  ======================================================== */

  window.addEventListener("load", () => {
    ScrollTrigger.refresh();
  });
});
