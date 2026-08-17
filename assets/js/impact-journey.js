/* =========================================================
   BAVUKE FOUNDATION
   IMPACT PAGE — IMPACT JOURNEY
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

  const section = document.querySelector(".impact-journey");

  const pin = document.querySelector(".impact-journey-pin");

  const track = document.querySelector(".impact-journey-track");

  const inner = document.querySelector(".impact-journey-inner");

  const cards = gsap.utils.toArray(".impact-journey-card");

  const progress = document.querySelector(
    ".impact-journey-progress-track span",
  );

  /* =======================================================
     SAFETY CHECK
  ======================================================= */

  if (!section || !pin || !track || !inner || !cards.length) {
    console.warn("Impact Journey elements not found.");
    return;
  }

  /* =======================================================
     INITIAL PROGRESS STATE
  ======================================================= */

  if (progress) {
    gsap.set(progress, {
      scaleX: 0,
      transformOrigin: "left center",
    });
  }

  /* =======================================================
     RESPONSIVE
  ======================================================= */

  const mm = gsap.matchMedia();

  /* =======================================================
     DESKTOP
  ======================================================= */

  mm.add("(min-width: 769px)", () => {
    /* =================================================
       RESET
    ================================================= */

    gsap.set(track, {
      x: 0,
    });

    /* =================================================
       DISTANCE
    ================================================= */

    const getDistance = () => {
      const trackLeft = track.getBoundingClientRect().left;

      const totalWidth = inner.scrollWidth;

      const availableWidth = window.innerWidth - trackLeft;

      return Math.max(0, totalWidth - availableWidth);
    };

    /* =================================================
       MASTER TIMELINE
    ================================================= */

    const journey = gsap.timeline({
      defaults: {
        ease: "none",
      },

      scrollTrigger: {
        trigger: pin,

        start: "top top",

        end: () => `+=${getDistance()}`,

        pin: true,

        scrub: 1.2,

        anticipatePin: 1,

        invalidateOnRefresh: true,

        pinSpacing: true,

        onUpdate: (self) => {
          if (progress) {
            gsap.set(progress, {
              scaleX: self.progress,
            });
          }
        },
        onRefresh: (self) => {
          if (!progress) return;

          gsap.set(progress, {
            scaleX: self.progress,
          });
        },
      },
    });

    /* =================================================
       HORIZONTAL MOVEMENT
    ================================================= */

    journey.to(
      track,
      {
        x: () => -getDistance(),

        duration: 1,
      },
      0,
    );

    /* =================================================
       CARD IMAGE PARALLAX
    ================================================= */

    cards.forEach((card) => {
      const image = card.querySelector(".impact-journey-image img");

      if (!image) {
        return;
      }

      gsap.fromTo(
        image,

        {
          xPercent: -8,
        },

        {
          xPercent: 8,

          ease: "none",

          scrollTrigger: {
            trigger: card,

            containerAnimation: journey,

            start: "left right",

            end: "right left",

            scrub: 1,
          },
        },
      );
    });

    /* =================================================
       CARD CONTENT MOVEMENT
    ================================================= */

    cards.forEach((card) => {
      const content = card.querySelector(".impact-journey-content");

      if (!content) {
        return;
      }

      gsap.fromTo(
        content,

        {
          x: 45,
          opacity: 0.65,
        },

        {
          x: 0,
          opacity: 1,

          ease: "none",

          scrollTrigger: {
            trigger: card,

            containerAnimation: journey,

            start: "left 85%",

            end: "left 40%",

            scrub: 1,
          },
        },
      );
    });

    /* =================================================
       REFRESH
    ================================================= */

    ScrollTrigger.refresh();

    /* =================================================
       DEBUG
    ================================================= */

    console.log("Impact Journey loaded.", {
      distance: getDistance(),
      cards: cards.length,
    });
  });

  /* =======================================================
     MOBILE
  ======================================================= */

  mm.add("(max-width: 768px)", () => {
    /* =================================================
       RESET
    ================================================= */

    gsap.set(track, {
      clearProps: "all",
    });

    if (progress) {
      gsap.set(progress, {
        scaleX: 0,
      });
    }

    /* =================================================
       CARD ANIMATIONS
    ================================================= */

    cards.forEach((card) => {
      gsap.fromTo(
        card,

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
            trigger: card,

            start: "top 82%",

            toggleActions: "play none none reverse",
          },
        },
      );
    });
  });

  /* =======================================================
     WINDOW LOAD
  ======================================================= */

  window.addEventListener("load", () => {
    ScrollTrigger.refresh();
  });
});
