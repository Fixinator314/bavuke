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

  if (!section) {
    return;
  }

  const intro = section.querySelector(".focus-intro");
  const track = section.querySelector(".focus-track");
  const panels = gsap.utils.toArray(".focus-panel");
  const progress = section.querySelector(".focus-progress-bar span");
  const progressText = section.querySelector(".focus-progress-text");

  if (!intro || !track || !panels.length) {
    return;
  }

  const mm = gsap.matchMedia();

  /* =======================================================
     DESKTOP — HORIZONTAL EXPERIENCE
  ======================================================= */

  mm.add("(min-width: 769px)", () => {
    /* =====================================================
       INTRO ELEMENTS
    ====================================================== */

    const introEyebrow = intro.querySelector(".focus-eyebrow");
    const introTitle = intro.querySelector(".focus-intro-content h2");
    const introText = intro.querySelector(".focus-intro-content p");
    const scrollHint = intro.querySelector(".focus-scroll-hint");

    /* =====================================================
       INTRO INITIAL STATE
    ====================================================== */

    gsap.set([introEyebrow, introTitle, introText, scrollHint], {
      opacity: 0,
    });

    gsap.set(introTitle, {
      y: 70,
    });

    gsap.set([introText, scrollHint], {
      y: 30,
    });

    /* =====================================================
       INTRO ANIMATION
    ====================================================== */

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
      return Math.max(0, track.scrollWidth - window.innerWidth);
    };

    /* =====================================================
       HORIZONTAL TRACK
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
       PANEL ANIMATIONS
    ====================================================== */

    panels.forEach((panel) => {
      const content = panel.querySelector(".focus-panel-content");

      const word = panel.querySelector(".focus-panel-word");

      const items = panel.querySelectorAll(".focus-item");

      /* ---------------------------------------------------
         CONTENT
      --------------------------------------------------- */

      if (content) {
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
      }

      /* ---------------------------------------------------
         BACKGROUND WORD
      --------------------------------------------------- */

      if (word) {
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
      }

      /* ---------------------------------------------------
         ITEMS
      --------------------------------------------------- */

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
  });

  /* =======================================================
     MOBILE — NORMAL VERTICAL EXPERIENCE
  ======================================================= */

  mm.add("(max-width: 768px)", () => {
    /* =====================================================
       INTRO
    ====================================================== */

    const introEyebrow = intro.querySelector(".focus-eyebrow");

    const introTitle = intro.querySelector(".focus-intro-content h2");

    const introText = intro.querySelector(".focus-intro-content p");

    const scrollHint = intro.querySelector(".focus-scroll-hint");

    /* =====================================================
       INTRO
    ====================================================== */

    gsap.fromTo(
      introEyebrow,

      {
        opacity: 0,

        y: 20,
      },

      {
        opacity: 1,

        y: 0,

        duration: 0.6,

        ease: "power3.out",

        scrollTrigger: {
          trigger: intro,

          start: "top 80%",

          toggleActions: "play none none reverse",
        },
      },
    );

    gsap.fromTo(
      introTitle,

      {
        opacity: 0,

        y: 45,
      },

      {
        opacity: 1,

        y: 0,

        duration: 0.8,

        ease: "power3.out",

        scrollTrigger: {
          trigger: introTitle,

          start: "top 80%",

          toggleActions: "play none none reverse",
        },
      },
    );

    gsap.fromTo(
      introText,

      {
        opacity: 0,

        y: 25,
      },

      {
        opacity: 1,

        y: 0,

        duration: 0.6,

        ease: "power3.out",

        scrollTrigger: {
          trigger: introText,

          start: "top 85%",

          toggleActions: "play none none reverse",
        },
      },
    );

    gsap.fromTo(
      scrollHint,

      {
        opacity: 0,

        y: 20,
      },

      {
        opacity: 1,

        y: 0,

        duration: 0.5,

        ease: "power3.out",

        scrollTrigger: {
          trigger: scrollHint,

          start: "top 90%",

          toggleActions: "play none none reverse",
        },
      },
    );

    /* =====================================================
       MOBILE PANELS
    ====================================================== */

    panels.forEach((panel) => {
      const content = panel.querySelector(".focus-panel-content");

      const word = panel.querySelector(".focus-panel-word");

      const items = panel.querySelectorAll(".focus-item");

      /* ---------------------------------------------------
         PANEL CONTENT
      --------------------------------------------------- */

      if (content) {
        gsap.fromTo(
          content,

          {
            opacity: 0,

            y: 40,
          },

          {
            opacity: 1,

            y: 0,

            duration: 0.8,

            ease: "power3.out",

            scrollTrigger: {
              trigger: panel,

              start: "top 75%",

              toggleActions: "play none none reverse",
            },
          },
        );
      }

      /* ---------------------------------------------------
         BACKGROUND WORD
      --------------------------------------------------- */

      if (word) {
        gsap.fromTo(
          word,

          {
            opacity: 0,

            x: 80,
          },

          {
            opacity: 1,

            x: 0,

            duration: 1,

            ease: "power2.out",

            scrollTrigger: {
              trigger: panel,

              start: "top 85%",

              toggleActions: "play none none reverse",
            },
          },
        );
      }

      /* ---------------------------------------------------
         ITEMS
      --------------------------------------------------- */

      items.forEach((item, index) => {
        gsap.fromTo(
          item,

          {
            opacity: 0,

            y: 25,
          },

          {
            opacity: 1,

            y: 0,

            duration: 0.5,

            delay: index * 0.05,

            ease: "power2.out",

            scrollTrigger: {
              trigger: item,

              start: "top 90%",

              toggleActions: "play none none reverse",
            },
          },
        );
      });
    });
  });

  /* =======================================================
     REFRESH
  ======================================================= */

  window.addEventListener("load", () => {
    ScrollTrigger.refresh();
  });
});
