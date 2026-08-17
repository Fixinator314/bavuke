/* =========================================================
   BAVUKE FOUNDATION
   IMPACT — COMMUNITY ACTION
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
     SECTION
  ======================================================= */

  const section = document.querySelector(".impact-community");

  if (!section) {
    return;
  }

  /* =======================================================
     ELEMENTS
  ======================================================= */

  const backgroundWord = section.querySelector(".impact-community-bg");

  const heroImage = section.querySelector(".community-hero-image");

  const heroImageElement = section.querySelector(".community-hero-image img");

  const header = section.querySelector(".impact-community-header");

  const center = section.querySelector(".community-center");

  const centerRing = section.querySelector(".community-center-ring");

  const nodes = section.querySelectorAll(".community-node");

  const lines = section.querySelectorAll(".community-line");

  /* =======================================================
     INITIAL STATES
  ======================================================= */

  if (header) {
    gsap.set(header, {
      opacity: 0,
      y: 60,
    });
  }

  if (heroImage) {
    gsap.set(heroImage, {
      opacity: 0,
      y: 70,
    });
  }

  if (center) {
    gsap.set(center, {
      opacity: 0,
      scale: 0.5,
    });
  }

  if (nodes.length) {
    gsap.set(nodes, {
      opacity: 0,
      y: 45,
    });
  }

  if (lines.length) {
    gsap.set(lines, {
      scaleX: 0,
    });
  }

  /* =======================================================
     MAIN INTRO TIMELINE
  ======================================================= */

  const intro = gsap.timeline({
    paused: true,
  });

  if (heroImage) {
    intro.to(heroImage, {
      opacity: 1,
      y: 0,

      duration: 0.9,

      ease: "power3.out",
    });
  }

  if (header) {
    intro.to(
      header,
      {
        opacity: 1,
        y: 0,

        duration: 0.8,

        ease: "power3.out",
      },
      "-=0.35",
    );
  }

  if (center) {
    intro.to(
      center,
      {
        opacity: 1,
        scale: 1,

        duration: 0.75,

        ease: "back.out(1.7)",
      },
      "-=0.15",
    );
  }

  if (lines.length) {
    intro.to(
      lines,
      {
        scaleX: 1,

        duration: 0.65,

        stagger: 0.12,

        ease: "power2.out",
      },
      "-=0.3",
    );
  }

  if (nodes.length) {
    intro.to(
      nodes,
      {
        opacity: 1,
        y: 0,

        duration: 0.65,

        stagger: 0.12,

        ease: "power3.out",
      },
      "-=0.25",
    );
  }

  /* =======================================================
     START INTRO
  ======================================================= */

  ScrollTrigger.create({
    trigger: section,

    start: "top 65%",

    once: true,

    onEnter: () => {
      intro.play();
    },
  });

  /* =======================================================
     IMAGE PARALLAX
  ======================================================= */

  if (heroImageElement && window.innerWidth > 768) {
    gsap.to(heroImageElement, {
      yPercent: -10,

      scale: 1.08,

      ease: "none",

      scrollTrigger: {
        trigger: heroImage,

        start: "top bottom",

        end: "bottom top",

        scrub: 1.2,
      },
    });
  }

  /* =======================================================
     MOBILE IMAGE PARALLAX
  ======================================================= */

  if (heroImageElement && window.innerWidth <= 768) {
    gsap.to(heroImageElement, {
      yPercent: -5,

      scale: 1.04,

      ease: "none",

      scrollTrigger: {
        trigger: heroImage,

        start: "top bottom",

        end: "bottom top",

        scrub: 1.5,
      },
    });
  }

  /* =======================================================
     BACKGROUND WORD PARALLAX
  ======================================================= */

  if (backgroundWord) {
    gsap.to(backgroundWord, {
      xPercent: 12,

      yPercent: -10,

      ease: "none",

      scrollTrigger: {
        trigger: section,

        start: "top bottom",

        end: "bottom top",

        scrub: 1.5,
      },
    });
  }

  /* =======================================================
     CENTRE PULSE
  ======================================================= */

  if (centerRing) {
    gsap.to(centerRing, {
      scale: 1.12,

      opacity: 0.45,

      duration: 1.8,

      repeat: -1,

      yoyo: true,

      ease: "sine.inOut",
    });
  }

  /* =======================================================
     NODE HOVER
  ======================================================= */

  nodes.forEach((node) => {
    const icon = node.querySelector(".community-node-icon");

    node.addEventListener("mouseenter", () => {
      gsap.to(node, {
        y: -8,

        duration: 0.35,

        ease: "power2.out",
      });

      if (icon) {
        gsap.to(icon, {
          rotate: -8,

          scale: 1.1,

          color: "#013585",

          backgroundColor: "#ffc107",

          duration: 0.3,

          ease: "power2.out",
        });
      }
    });

    node.addEventListener("mouseleave", () => {
      gsap.to(node, {
        y: 0,

        duration: 0.35,

        ease: "power2.out",
      });

      if (icon) {
        gsap.to(icon, {
          rotate: 0,

          scale: 1,

          color: "#ffc107",

          backgroundColor: "transparent",

          duration: 0.3,

          ease: "power2.out",
        });
      }
    });
  });

  /* =======================================================
     IMAGE HOVER
  ======================================================= */

  if (heroImage) {
    heroImage.addEventListener("mouseenter", () => {
      if (heroImageElement) {
        gsap.to(heroImageElement, {
          scale: 1.1,

          duration: 1.2,

          ease: "power3.out",
        });
      }
    });

    heroImage.addEventListener("mouseleave", () => {
      if (heroImageElement) {
        gsap.to(heroImageElement, {
          scale: 1.08,

          duration: 1.2,

          ease: "power3.out",
        });
      }
    });
  }

  /* =======================================================
     REFRESH AFTER IMAGES LOAD
  ======================================================= */

  if (heroImageElement) {
    heroImageElement.addEventListener("load", () => {
      ScrollTrigger.refresh();
    });
  }

  /* =======================================================
     GLOBAL REFRESH
  ======================================================= */

  window.addEventListener("load", () => {
    ScrollTrigger.refresh();
  });
});
