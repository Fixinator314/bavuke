/* =========================================================
   BAVUKE FOUNDATION
   IMPACT — EDUCATION SECTION
========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") {
    console.warn("GSAP or ScrollTrigger is not loaded.");

    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  const section = document.querySelector(".impact-education");

  if (!section) {
    return;
  }

  const backgroundWord = section.querySelector(".impact-education-bg");

  const intro = section.querySelector(".impact-education-intro");

  const image = section.querySelector(".education-image");

  const programmes = section.querySelectorAll(".education-programme");

  const progress = section.querySelector(".education-progress-line span");

  const currentNumber = section.querySelector(".education-current");

  /* =======================================================
     INTRO
  ======================================================= */

  gsap.set(intro, {
    opacity: 0,
    y: 60,
  });

  gsap.to(intro, {
    opacity: 1,

    y: 0,

    duration: 1,

    ease: "power3.out",

    scrollTrigger: {
      trigger: section,

      start: "top 70%",

      once: true,
    },
  });

  /* =======================================================
     IMAGE REVEAL
  ======================================================= */

  gsap.fromTo(
    image,

    {
      clipPath: "inset(0 100% 0 0)",
    },

    {
      clipPath: "inset(0 0% 0 0)",

      duration: 1.2,

      ease: "power4.inOut",

      scrollTrigger: {
        trigger: image,

        start: "top 75%",

        once: true,
      },
    },
  );

  /* =======================================================
     IMAGE PARALLAX
  ======================================================= */

  gsap.to(image, {
    yPercent: -8,

    scale: 1.04,

    ease: "none",

    scrollTrigger: {
      trigger: section,

      start: "top bottom",

      end: "bottom top",

      scrub: 1.2,
    },
  });

  /* =======================================================
     BACKGROUND WORD
  ======================================================= */

  if (backgroundWord) {
    gsap.to(backgroundWord, {
      xPercent: 8,

      yPercent: -12,

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
     PROGRAMME REVEAL
  ======================================================= */

  programmes.forEach((programme, index) => {
    gsap.fromTo(
      programme,

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
          trigger: programme,

          start: "top 80%",

          once: true,
        },
      },
    );
  });

  /* =======================================================
     ACTIVE PROGRAMME
  ======================================================= */

  programmes.forEach((programme, index) => {
    ScrollTrigger.create({
      trigger: programme,

      start: "top 55%",

      end: "bottom 55%",

      onEnter: () => {
        setActive(index);
      },

      onEnterBack: () => {
        setActive(index);
      },
    });
  });

  function setActive(index) {
    programmes.forEach((programme, i) => {
      programme.classList.toggle("active", i === index);
    });

    if (progress) {
      gsap.to(progress, {
        width: `${((index + 1) / programmes.length) * 100}%`,

        duration: 0.4,

        ease: "power2.out",
      });
    }

    if (currentNumber) {
      currentNumber.textContent = String(index + 1).padStart(2, "0");
    }
  }

  /* =======================================================
     MOBILE REFRESH
  ======================================================= */

  window.addEventListener("load", () => {
    ScrollTrigger.refresh();
  });
});
