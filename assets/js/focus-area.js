/* =========================================================
   BAVUKE FOUNDATION
   ABOUT — FOCUS AREAS
========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") {
    console.warn("GSAP or ScrollTrigger is not loaded.");

    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  const section = document.querySelector(".focus-areas");

  const intro = document.querySelector(".focus-intro");

  const track = document.querySelector(".focus-track");

  const panels = gsap.utils.toArray(".focus-panel");

  const progress = document.querySelector(".focus-progress-bar span");

  const progressText = document.querySelector(".focus-progress-text");

  if (!section || !intro || !track || !panels.length) {
    return;
  }

  /* =====================================================
     INTRO ANIMATION
  ====================================================== */

  const introEyebrow = intro.querySelector(".focus-eyebrow");

  const introTitle = intro.querySelector(".focus-intro-content h2");

  const introText = intro.querySelector(".focus-intro-content p");

  const scrollHint = intro.querySelector(".focus-scroll-hint");

  gsap.set([introEyebrow, introTitle, introText, scrollHint], {
    opacity: 0,
  });

  gsap.set(introTitle, {
    y: 70,
  });

  gsap.set([introText, scrollHint], {
    y: 30,
  });

  const introTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: section,

      start: "top 75%",

      toggleActions: "play none none reverse",
    },
  });

  introTimeline

    .to(introEyebrow, {
      opacity: 1,

      duration: 0.5,

      ease: "power3.out",
    })

    .to(
      introTitle,
      {
        opacity: 1,

        y: 0,

        duration: 0.9,

        ease: "power3.out",
      },
      "-=0.2",
    )

    .to(
      introText,
      {
        opacity: 1,

        y: 0,

        duration: 0.6,

        ease: "power3.out",
      },
      "-=0.4",
    )

    .to(
      scrollHint,
      {
        opacity: 1,

        y: 0,

        duration: 0.5,

        ease: "power3.out",
      },
      "-=0.25",
    );

  /* =====================================================
     HORIZONTAL DISTANCE
  ====================================================== */

  const getDistance = () => {
    return track.scrollWidth - window.innerWidth;
  };

  /* =====================================================
     HORIZONTAL SCROLL
  ====================================================== */

  const horizontal = gsap.to(track, {
    x: () => -getDistance(),

    ease: "none",

    scrollTrigger: {
      trigger: section,

      pin: true,

      scrub: 1,

      start: "top top",

      end: () => "+=" + getDistance(),

      invalidateOnRefresh: true,
    },
  });

  /* =====================================================
     INTRO PANEL EXIT
  ====================================================== */

  gsap.to(intro, {
    xPercent: -100,

    ease: "none",

    scrollTrigger: {
      trigger: section,

      start: "top top",

      end: () => "+=" + getDistance() * 0.45,

      scrub: 1,
    },
  });

  /* =====================================================
     PANEL CONTENT
  ====================================================== */

  panels.forEach((panel, index) => {
    const content = panel.querySelector(".focus-panel-content");

    const word = panel.querySelector(".focus-panel-word");

    const items = panel.querySelectorAll(".focus-item");

    gsap.fromTo(
      content,

      {
        x: 80,

        opacity: 0.35,
      },

      {
        x: -30,

        opacity: 1,

        ease: "none",

        scrollTrigger: {
          trigger: panel,

          containerAnimation: horizontal,

          start: "left right",

          end: "right left",

          scrub: true,
        },
      },
    );

    gsap.to(word, {
      x: -180,

      ease: "none",

      scrollTrigger: {
        trigger: panel,

        containerAnimation: horizontal,

        start: "left right",

        end: "right left",

        scrub: true,
      },
    });

    /* -----------------------------------------------
         ITEM REVEAL
      ------------------------------------------------ */

    items.forEach((item) => {
      gsap.fromTo(
        item,

        {
          opacity: 0.25,

          y: 20,
        },

        {
          opacity: 1,

          y: 0,

          ease: "none",

          scrollTrigger: {
            trigger: item,

            containerAnimation: horizontal,

            start: "left 85%",

            end: "left 55%",

            scrub: true,
          },
        },
      );
    });
  });

  /* =====================================================
     PROGRESS BAR
  ====================================================== */

  if (progress) {
    gsap.to(progress, {
      width: "100%",

      ease: "none",

      scrollTrigger: {
        trigger: section,

        start: "top top",

        end: () => "+=" + getDistance(),

        scrub: true,
      },
    });
  }

  /* =====================================================
     PROGRESS TEXT
  ====================================================== */

  if (progressText) {
    ScrollTrigger.create({
      trigger: section,

      start: "top top",

      end: () => "+=" + getDistance(),

      scrub: true,

      onUpdate: (self) => {
        const value = Math.min(3, Math.floor(self.progress * 3) + 1);

        progressText.textContent = `0${value} / 03`;
      },
    });
  }

  /* =====================================================
     REFRESH
  ====================================================== */

  window.addEventListener("load", () => {
    ScrollTrigger.refresh();
  });
});
