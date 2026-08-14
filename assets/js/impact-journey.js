/* =========================================================
   BAVUKE FOUNDATION
   IMPACT JOURNEY
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

  const section = document.querySelector(".impact-journey");

  const track = document.querySelector(".impact-journey-track");

  const inner = document.querySelector(".impact-journey-inner");

  const background = document.querySelector(".impact-journey-bg");

  if (!section || !track || !inner) {
    return;
  }

  /* =======================================================
     RESPONSIVE
  ======================================================= */

  const mm = gsap.matchMedia();

  /* =======================================================
     DESKTOP
  ======================================================= */

  mm.add("(min-width: 769px)", () => {
    /* ===================================================
         DISTANCE
      =================================================== */

    const getDistance = () => {
      return Math.max(0, inner.scrollWidth - window.innerWidth);
    };

    /* ===================================================
         HORIZONTAL SCROLL
      =================================================== */

    gsap.to(inner, {
      x: () => -getDistance(),

      ease: "none",

      scrollTrigger: {
        trigger: track,

        start: "top top",

        end: () => `+=${getDistance()}`,

        pin: true,

        scrub: 1.2,

        anticipatePin: 1,

        invalidateOnRefresh: true,

        pinSpacing: true,
      },
    });

    /* ===================================================
         BACKGROUND PARALLAX
      =================================================== */

    if (background) {
      gsap.to(background, {
        xPercent: -18,

        ease: "none",

        scrollTrigger: {
          trigger: track,

          start: "top bottom",

          end: "bottom top",

          scrub: 1.5,
        },
      });
    }
  });

  /* =======================================================
     MOBILE
  ======================================================= */

  mm.add("(max-width: 768px)", () => {
    gsap.utils.toArray(".impact-step").forEach((step) => {
      gsap.fromTo(
        step,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,

          duration: 0.7,

          ease: "power3.out",

          scrollTrigger: {
            trigger: step,

            start: "top 80%",

            toggleActions: "play none none reverse",
          },
        },
      );
    });
  });
});
