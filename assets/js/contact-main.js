/* =========================================================
   BAVUKE FOUNDATION
   CONTACT — MAIN SECTION
========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") {
    console.warn("GSAP or ScrollTrigger is not loaded.");

    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  const section = document.querySelector(".contact-main");

  const information = document.querySelector(".contact-information");

  const details = document.querySelectorAll(".contact-detail");

  const form = document.querySelector(".contact-form-wrapper");

  const fields = document.querySelectorAll(".form-field");

  if (!section) {
    return;
  }

  /* =====================================================
       INTRO
    ===================================================== */

  gsap.fromTo(
    information,

    {
      opacity: 0,
      x: -60,
    },

    {
      opacity: 1,
      x: 0,

      duration: 0.9,

      ease: "power3.out",

      scrollTrigger: {
        trigger: section,

        start: "top 70%",

        once: true,
      },
    },
  );

  /* =====================================================
       CONTACT DETAILS
    ===================================================== */

  if (details.length) {
    gsap.fromTo(
      details,

      {
        opacity: 0,
        y: 25,
      },

      {
        opacity: 1,
        y: 0,

        duration: 0.6,

        stagger: 0.12,

        ease: "power3.out",

        scrollTrigger: {
          trigger: details[0],

          start: "top 85%",

          once: true,
        },
      },
    );
  }

  /* =====================================================
       FORM
    ===================================================== */

  if (form) {
    gsap.fromTo(
      form,

      {
        opacity: 0,
        x: 60,
      },

      {
        opacity: 1,
        x: 0,

        duration: 0.9,

        ease: "power3.out",

        scrollTrigger: {
          trigger: section,

          start: "top 65%",

          once: true,
        },
      },
    );
  }

  /* =====================================================
       FORM FIELDS
    ===================================================== */

  if (fields.length) {
    gsap.fromTo(
      fields,

      {
        opacity: 0,
        y: 20,
      },

      {
        opacity: 1,
        y: 0,

        duration: 0.5,

        stagger: 0.08,

        ease: "power2.out",

        scrollTrigger: {
          trigger: form,

          start: "top 70%",

          once: true,
        },
      },
    );
  }

  /* =====================================================
       FORM SUBMISSION
       
       IMPORTANT:
       This is only the FRONT-END handler for now.
       We will connect the form to the backend later.
    ===================================================== */

  const contactForm = document.querySelector("#contact-form");

  const status = document.querySelector("#contact-form-status");

  if (contactForm && status) {
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();

      status.textContent =
        "Thanks for reaching out. Your message is ready to be connected to our server.";

      contactForm.reset();
    });
  }

  /* =====================================================
       REFRESH
    ===================================================== */

  window.addEventListener("load", () => {
    ScrollTrigger.refresh();
  });
});
