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
    const image = hero.querySelector(".inner-page-hero-image img");

    const word = hero.querySelector(".inner-page-hero-word");

    const eyebrow = hero.querySelector(".inner-page-hero-eyebrow");

    const title = hero.querySelector(".inner-page-hero-content h1");

    const description = hero.querySelector(".inner-page-hero-content p");

    const bottom = hero.querySelector(".inner-page-hero-bottom");

    const scrollLine = hero.querySelector(".inner-page-scroll-line span");

    /* =================================================
   INTRO ANIMATION
================================================= */

    gsap.set(eyebrow, {
      opacity: 0,
      y: 25,
    });

    gsap.set(title, {
      opacity: 0,
      y: 60,
    });

    gsap.set(description, {
      opacity: 0,
      y: 30,
    });

    gsap.set(bottom, {
      opacity: 0,
    });

    const intro = gsap.timeline();

    intro

      .to(eyebrow, {
        opacity: 1,
        y: 0,
        duration: 0.65,
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
        "-=0.35",
      )

      .to(
        bottom,
        {
          opacity: 1,
          duration: 0.5,
        },
        "-=0.2",
      );

    /* =================================================
           IMAGE PARALLAX
        ================================================= */

    gsap.to(image, {
      yPercent: -10,

      scale: 1.05,

      ease: "none",

      scrollTrigger: {
        trigger: hero,

        start: "top top",

        end: "bottom top",

        scrub: 1.2,
      },
    });

    /* =================================================
           BACKGROUND WORD PARALLAX
        ================================================= */

    gsap.to(word, {
      xPercent: 12,

      yPercent: -15,

      ease: "none",

      scrollTrigger: {
        trigger: hero,

        start: "top top",

        end: "bottom top",

        scrub: 1.5,
      },
    });

    /* =================================================
           CONTENT EXIT
        ================================================= */

    gsap.to([eyebrow, title, description], {
      y: -60,

      opacity: 0.2,

      ease: "none",

      scrollTrigger: {
        trigger: hero,

        start: "top top",

        end: "bottom top",

        scrub: 1,
      },
    });

    /* =================================================
           SCROLL LINE
        ================================================= */

    if (scrollLine) {
      gsap.to(scrollLine, {
        xPercent: 230,

        ease: "none",

        repeat: -1,

        duration: 1.5,
      });
    }
  });
});
