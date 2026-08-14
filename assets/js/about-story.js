/* =========================================================
   BAVUKE FOUNDATION
   ABOUT — WHY BAVUKE EXISTS
========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") {
    console.warn("GSAP or ScrollTrigger is not loaded.");

    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  const section = document.querySelector(".about-story");

  if (!section) {
    return;
  }

  const label = section.querySelector(".about-story-label");

  const title = section.querySelector(".about-story-intro h2");

  const line = section.querySelector(".about-story-line");

  const image = section.querySelector(".about-story-image img");

  const imageBox = section.querySelector(".about-story-image");

  const imageLabel = section.querySelector(".about-story-image-label");

  const paragraphs = section.querySelectorAll(".about-story-text p");

  const link = section.querySelector(".about-story-link");

  const backgroundNumber = section.querySelector(".about-story-number");

  /* =====================================================
       INITIAL STATES
    ====================================================== */

  gsap.set([label, title, line, imageBox, imageLabel, ...paragraphs, link], {
    opacity: 0,
  });

  gsap.set(title, {
    y: 70,
  });

  gsap.set(line, {
    scaleX: 0,

    transformOrigin: "left center",
  });

  gsap.set(imageBox, {
    y: 80,
  });

  gsap.set(paragraphs, {
    y: 40,
  });

  gsap.set(link, {
    y: 25,
  });

  /* =====================================================
       MAIN REVEAL
    ====================================================== */

  const reveal = gsap.timeline({
    scrollTrigger: {
      trigger: section,

      start: "top 70%",

      toggleActions: "play none none reverse",
    },
  });

  reveal

    .to(label, {
      opacity: 1,

      duration: 0.5,

      ease: "power2.out",
    })

    .to(
      title,
      {
        opacity: 1,

        y: 0,

        duration: 0.9,

        ease: "power3.out",
      },
      "-=0.2",
    )

    .to(
      line,
      {
        opacity: 1,

        scaleX: 1,

        duration: 0.6,

        ease: "power3.out",
      },
      "-=0.4",
    )

    .to(
      imageBox,
      {
        opacity: 1,

        y: 0,

        duration: 1,

        ease: "power3.out",
      },
      "-=0.5",
    )

    .to(
      imageLabel,
      {
        opacity: 1,

        duration: 0.4,
      },
      "-=0.3",
    );

  /* =====================================================
       TEXT REVEAL
    ====================================================== */

  gsap.to(paragraphs, {
    opacity: 1,

    y: 0,

    duration: 0.8,

    stagger: 0.15,

    ease: "power3.out",

    scrollTrigger: {
      trigger: ".about-story-text",

      start: "top 75%",

      toggleActions: "play none none reverse",
    },
  });

  /* =====================================================
       LINK
    ====================================================== */

  gsap.to(link, {
    opacity: 1,

    y: 0,

    duration: 0.6,

    ease: "power3.out",

    scrollTrigger: {
      trigger: link,

      start: "top 90%",

      toggleActions: "play none none reverse",
    },
  });

  /* =====================================================
       IMAGE PARALLAX
    ====================================================== */

  gsap.fromTo(
    image,

    {
      yPercent: -8,
    },

    {
      yPercent: 8,

      ease: "none",

      scrollTrigger: {
        trigger: imageBox,

        start: "top bottom",

        end: "bottom top",

        scrub: 1.2,
      },
    },
  );

  /* =====================================================
       BACKGROUND NUMBER
    ====================================================== */

  gsap.to(backgroundNumber, {
    yPercent: -20,

    xPercent: -5,

    ease: "none",

    scrollTrigger: {
      trigger: section,

      start: "top bottom",

      end: "bottom top",

      scrub: 1.5,
    },
  });
});
