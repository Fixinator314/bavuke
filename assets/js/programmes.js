/* =========================================================
   BAVUKE FOUNDATION
   PROGRAMME PILLARS
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

  const section = document.querySelector(".programmes-section");

  const scrollArea = document.querySelector(".programmes-scroll-area");

  const stage = document.querySelector(".programmes-stage");

  const panels = gsap.utils.toArray(".programme-panel");

  const progress = document.querySelector(".programmes-progress");

  const progressBar = document.querySelector(".programmes-progress-bar");

  const current = document.querySelector(".programmes-progress-current");

  const backgroundWord = document.querySelector(".programmes-bg-word");

  if (!section || !scrollArea || !stage || panels.length === 0) {
    return;
  }

  /* =======================================================
     DESKTOP ONLY
  ======================================================= */

  const mm = gsap.matchMedia();

  mm.add("(min-width: 769px)", () => {
    /* ===================================================
         INITIAL PANEL
      =================================================== */

    panels.forEach((panel, index) => {
      panel.classList.toggle("is-active", index === 0);
    });

    /* ===================================================
         PANEL CONTENT
      =================================================== */

    panels.forEach((panel, index) => {
      const label = panel.querySelector(".programme-panel-label");

      const title = panel.querySelector("h3");

      const description = panel.querySelector("p");

      const tags = panel.querySelector(".programme-tags");

      const link = panel.querySelector(".programme-link");

      const visual = panel.querySelector(".programme-panel-visual");

      const image = panel.querySelector(".programme-panel-visual img");

      gsap.set([label, title, description, tags, link], {
        opacity: index === 0 ? 1 : 0,
        y: index === 0 ? 0 : 35,
      });

      gsap.set(visual, {
        opacity: index === 0 ? 1 : 0,
        scale: index === 0 ? 1 : 0.96,
      });

      /* ==============================================
             IMAGE PARALLAX
          ============================================== */

      gsap.to(image, {
        yPercent: -8,

        ease: "none",

        scrollTrigger: {
          trigger: scrollArea,

          start: "top top",

          end: "bottom bottom",

          scrub: 1,
        },
      });
    });

    /* ===================================================
         MAIN PIN
      =================================================== */

    ScrollTrigger.create({
      trigger: scrollArea,

      start: "top top",

      end: "bottom bottom",

      pin: stage,

      scrub: true,

      anticipatePin: 1,

      invalidateOnRefresh: true,

      /* =================================================
           UPDATE
        ================================================= */

      onUpdate: (self) => {
        const progressValue = self.progress;

        /* ===============================================
             PROGRESS BAR
          =============================================== */

        if (progressBar) {
          progressBar.style.height = `${progressValue * 100}%`;
        }

        /* ===============================================
             CURRENT NUMBER
          =============================================== */

        const panelCount = panels.length;

        let index = Math.floor(progressValue * panelCount);

        if (index >= panelCount) {
          index = panelCount - 1;
        }

        if (current) {
          current.textContent = String(index + 1).padStart(2, "0");
        }

        /* ===============================================
             ACTIVE PANEL
          =============================================== */

        panels.forEach((panel, panelIndex) => {
          const active = panelIndex === index;

          if (active) {
            if (!panel.classList.contains("is-active")) {
              panel.classList.add("is-active");

              animatePanelIn(panel);
            }
          } else {
            panel.classList.remove("is-active");
          }
        });
      },
    });

    /* ===================================================
         SECTION VISIBILITY
      =================================================== */

    ScrollTrigger.create({
      trigger: scrollArea,

      start: "top 80%",

      end: "bottom 20%",

      onEnter: () => {
        section.classList.add("programmes-active");
      },

      onEnterBack: () => {
        section.classList.add("programmes-active");
      },

      onLeave: () => {
        section.classList.remove("programmes-active");
      },

      onLeaveBack: () => {
        section.classList.remove("programmes-active");
      },
    });

    /* ===================================================
         BACKGROUND PARALLAX
      =================================================== */

    if (backgroundWord) {
      gsap.to(backgroundWord, {
        xPercent: 15,

        yPercent: -20,

        ease: "none",

        scrollTrigger: {
          trigger: section,

          start: "top bottom",

          end: "bottom top",

          scrub: 1.5,
        },
      });
    }

    /* ===================================================
         PANEL ANIMATION
      =================================================== */

    function animatePanelIn(panel) {
      const label = panel.querySelector(".programme-panel-label");

      const title = panel.querySelector("h3");

      const description = panel.querySelector("p");

      const tags = panel.querySelector(".programme-tags");

      const link = panel.querySelector(".programme-link");

      const visual = panel.querySelector(".programme-panel-visual");

      gsap.killTweensOf([label, title, description, tags, link, visual]);

      gsap
        .timeline()

        .fromTo(
          label,
          {
            opacity: 0,
            y: 25,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "power3.out",
          },
        )

        .fromTo(
          title,
          {
            opacity: 0,
            y: 45,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out",
          },
          "-=0.3",
        )

        .fromTo(
          description,
          {
            opacity: 0,
            y: 25,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "power3.out",
          },
          "-=0.35",
        )

        .fromTo(
          tags,
          {
            opacity: 0,
            y: 20,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.4,
          },
          "-=0.25",
        )

        .fromTo(
          link,
          {
            opacity: 0,
            y: 20,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.4,
          },
          "-=0.2",
        )

        .fromTo(
          visual,
          {
            opacity: 0,
            scale: 0.95,
          },
          {
            opacity: 1,
            scale: 1,
            duration: 0.7,
            ease: "power3.out",
          },
          "-=0.7",
        );
    }
  });

  /* =======================================================
     MOBILE
  ======================================================= */

  mm.add("(max-width: 768px)", () => {
    section.classList.remove("programmes-active");
  });
});
