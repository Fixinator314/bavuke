/* =========================================================
   BAVUKE FOUNDATION
   HOMEPAGE IMPACT JOURNEY
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
     ELEMENTS
  ======================================================= */

  const section = document.querySelector(".journey-home");

  const track = document.querySelector(".journey-home-track");

  const inner = document.querySelector(".journey-home-inner");

  const background = document.querySelector(".journey-home-bg");

  if (!section || !track || !inner) {
    console.warn("Homepage journey elements not found.");

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
    /* =====================================================
       CLEAN START
    ===================================================== */

    gsap.set(inner, {
      x: 0,
    });

    if (background) {
      gsap.set(background, {
        x: 0,
        y: 0,
      });
    }

    /* =====================================================
       DISTANCE
    ===================================================== */

    const getDistance = () => {
      const distance = inner.scrollWidth - track.clientWidth;

      return Math.max(0, distance);
    };

    /* =====================================================
       MASTER TIMELINE
    ===================================================== */

    const journeyTimeline = gsap.timeline({
      defaults: {
        ease: "none",
      },

      scrollTrigger: {
        trigger: track,

        start: "top top",

        end: () => {
          return `+=${getDistance()}`;
        },

        pin: true,

        scrub: 1.1,

        anticipatePin: 1,

        invalidateOnRefresh: true,

        pinSpacing: true,

        onRefresh: () => {
          gsap.set(inner, {
            x: 0,
          });
        },
      },
    });

    /* =====================================================
       HORIZONTAL JOURNEY
    ===================================================== */

    journeyTimeline.to(
      inner,
      {
        x: () => {
          return -getDistance();
        },

        duration: 1,
      },
      0,
    );

    /* =====================================================
       BACKGROUND PARALLAX
    ===================================================== */

    if (background) {
      journeyTimeline.to(
        background,
        {
          x: () => {
            return -window.innerWidth * 0.18;
          },

          y: () => {
            return -window.innerHeight * 0.08;
          },

          duration: 1,
        },
        0,
      );
    }

    /* =====================================================
       REFRESH
    ===================================================== */

    ScrollTrigger.refresh();

    /* =====================================================
       DEBUG
       Remove this later if you want.
    ===================================================== */

    console.log("Homepage journey loaded.", {
      distance: getDistance(),
      contentWidth: inner.scrollWidth,
      viewportWidth: track.clientWidth,
    });
  });

  /* =======================================================
     MOBILE
  ======================================================= */

  mm.add("(max-width: 768px)", () => {
    /* =====================================================
       RESET DESKTOP TRANSFORMS
    ===================================================== */

    gsap.set(inner, {
      clearProps: "all",
    });

    if (background) {
      gsap.set(background, {
        clearProps: "all",
      });
    }

    /* =====================================================
       STEP ANIMATIONS
    ===================================================== */

    gsap.utils.toArray(".journey-home-step").forEach((step) => {
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

    /* =====================================================
       FINAL CIRCLE
    ===================================================== */

    const finalCircle = document.querySelector(".journey-home-final-circle");

    if (finalCircle) {
      gsap.fromTo(
        finalCircle,

        {
          scale: 0.85,
          opacity: 0,
        },

        {
          scale: 1,
          opacity: 1,

          duration: 0.8,

          ease: "power3.out",

          scrollTrigger: {
            trigger: finalCircle,

            start: "top 80%",

            toggleActions: "play none none reverse",
          },
        },
      );
    }
  });

  /* =======================================================
     SCROLL INDICATOR
  ======================================================= */

  const scrollIndicator = document.querySelector(
    ".journey-home-scroll-line div",
  );

  if (scrollIndicator) {
    gsap.to(scrollIndicator, {
      xPercent: 180,

      duration: 1.5,

      repeat: -1,

      ease: "power2.inOut",
    });
  }

  /* =======================================================
     WINDOW LOAD
  ======================================================= */

  window.addEventListener("load", () => {
    ScrollTrigger.refresh();
  });
});
