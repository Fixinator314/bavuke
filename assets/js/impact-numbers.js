/* =========================================================
   BAVUKE FOUNDATION
   IMPACT — MEASURING THE DIFFERENCE
========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") {
    console.warn("GSAP or ScrollTrigger is not loaded.");

    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  /* =======================================================
     SECTION
  ======================================================= */

  const section = document.querySelector(".impact-numbers");

  if (!section) {
    return;
  }

  /* =======================================================
     ELEMENTS
  ======================================================= */

  const backgroundWord = section.querySelector(".impact-numbers-bg");

  const header = section.querySelector(".impact-numbers-header");

  const cards = section.querySelectorAll(".impact-number-card");

  const numbers = section.querySelectorAll(".impact-number");

  const progress = section.querySelector(".impact-numbers-line span");

  const bottom = section.querySelector(".impact-numbers-bottom");

  /* =======================================================
     HEADER
  ======================================================= */

  gsap.fromTo(
    header,

    {
      opacity: 0,
      y: 60,
    },

    {
      opacity: 1,
      y: 0,

      duration: 0.9,

      ease: "power3.out",

      scrollTrigger: {
        trigger: section,

        start: "top 70%",

        once: true,
      },
    },
  );

  /* =======================================================
     CARDS
  ======================================================= */

  gsap.fromTo(
    cards,

    {
      opacity: 0,
      y: 60,
    },

    {
      opacity: 1,
      y: 0,

      duration: 0.7,

      stagger: 0.12,

      ease: "power3.out",

      scrollTrigger: {
        trigger: ".impact-numbers-grid",

        start: "top 75%",

        once: true,

        onEnter: () => {
          animateNumbers();
        },
      },
    },
  );

  /* =======================================================
     NUMBER COUNTER
  ======================================================= */

  function animateNumbers() {
    numbers.forEach((number) => {
      const target = parseInt(number.dataset.target, 10);

      if (isNaN(target) || target <= 0) {
        return;
      }

      const counter = {
        value: 0,
      };

      gsap.to(
        counter,

        {
          value: target,

          duration: 1.8,

          ease: "power2.out",

          onUpdate: () => {
            number.textContent = Math.floor(counter.value);
          },
        },
      );
    });
  }

  /* =======================================================
     PROGRESS LINE
  ======================================================= */

  if (progress) {
    gsap.to(
      progress,

      {
        width: "100%",

        duration: 1.5,

        ease: "power3.out",

        scrollTrigger: {
          trigger: ".impact-numbers-grid",

          start: "top 75%",

          once: true,
        },
      },
    );
  }

  /* =======================================================
     BACKGROUND PARALLAX
  ======================================================= */

  if (backgroundWord) {
    gsap.to(
      backgroundWord,

      {
        xPercent: -10,

        yPercent: -12,

        ease: "none",

        scrollTrigger: {
          trigger: section,

          start: "top bottom",

          end: "bottom top",

          scrub: 1.5,
        },
      },
    );
  }

  /* =======================================================
     BOTTOM STATEMENT
  ======================================================= */

  if (bottom) {
    gsap.fromTo(
      bottom,

      {
        opacity: 0,

        y: 35,
      },

      {
        opacity: 1,

        y: 0,

        duration: 0.7,

        ease: "power3.out",

        scrollTrigger: {
          trigger: bottom,

          start: "top 85%",

          once: true,
        },
      },
    );
  }

  /* =======================================================
     CARD HOVER
  ======================================================= */

  cards.forEach((card) => {
    const icon = card.querySelector(".impact-number-top i");

    card.addEventListener("mouseenter", () => {
      gsap.to(
        card,

        {
          y: -8,

          duration: 0.3,

          ease: "power2.out",
        },
      );

      if (icon) {
        gsap.to(
          icon,

          {
            scale: 1.15,

            rotate: -8,

            color: "#ffc107",

            duration: 0.3,

            ease: "power2.out",
          },
        );
      }
    });

    card.addEventListener("mouseleave", () => {
      gsap.to(
        card,

        {
          y: 0,

          duration: 0.3,

          ease: "power2.out",
        },
      );

      if (icon) {
        gsap.to(
          icon,

          {
            scale: 1,

            rotate: 0,

            color: "rgba(255,255,255,0.55)",

            duration: 0.3,

            ease: "power2.out",
          },
        );
      }
    });
  });

  /* =======================================================
     REFRESH
  ======================================================= */

  window.addEventListener("load", () => {
    ScrollTrigger.refresh();
  });
});
