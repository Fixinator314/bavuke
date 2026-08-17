/* =========================================================
   BAVUKE FOUNDATION
   CONTACT — MAIN SECTION
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

  const section = document.querySelector(".contact-main");

  const information = document.querySelector(".contact-information");

  const details = document.querySelectorAll(".contact-detail");

  const form = document.querySelector(".contact-form-wrapper");

  const fields = document.querySelectorAll(".form-field");

  const contactForm = document.querySelector("#contact-form");

  const status = document.querySelector("#contact-form-status");

  if (!section) {
    return;
  }

  /* =====================================================
     INTRO
  ===================================================== */

  if (information) {
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
  }

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
     CONTACT FORM → BACKEND
  ===================================================== */

  if (contactForm && status) {
    contactForm.addEventListener("submit", async (event) => {
      event.preventDefault();

      /* =================================================
         GET FORM VALUES
      ================================================= */

      const name = contactForm.querySelector('[name="name"]')?.value.trim();

      const email = contactForm.querySelector('[name="email"]')?.value.trim();

      const subject = contactForm
        .querySelector('[name="subject"]')
        ?.value.trim();

      const message = contactForm
        .querySelector('[name="message"]')
        ?.value.trim();

      /* =================================================
         FRONT-END VALIDATION
      ================================================= */

      if (!name || !email || !subject || !message) {
        status.textContent = "Please complete all required fields.";
        status.style.color = "#d32f2f";

        return;
      }

      /* =================================================
         LOADING STATE
      ================================================= */

      const submitButton = contactForm.querySelector('button[type="submit"]');

      if (submitButton) {
        submitButton.disabled = true;
        submitButton.dataset.originalText = submitButton.textContent;
        submitButton.textContent = "Sending...";
      }

      status.textContent = "Sending your message...";
      status.style.color = "#013585";

      /* =================================================
         DATA TO SEND
      ================================================= */

      const formData = {
        name: name,
        email: email,
        subject: subject,
        message: message,
      };

      /* =================================================
         SEND TO EXPRESS API
      ================================================= */

      try {
        const response = await fetch("http://localhost:5000/api/contact", {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify(formData),
        });

        const data = await response.json();

        /* =================================================
           SUCCESS
        ================================================= */

        if (response.ok && data.success) {
          status.textContent =
            "Thank you for contacting Bavuke Foundation. Your message has been received.";

          status.style.color = "#16803c";

          contactForm.reset();

          console.log("Contact submission successful:", data);
        } else {

        /* =================================================
           SERVER ERROR
        ================================================= */
          status.textContent =
            data.message ||
            "Something went wrong while submitting your message.";

          status.style.color = "#d32f2f";

          console.error("API error:", data);
        }
      } catch (error) {
        /* ===================================================
         NETWORK ERROR
      =================================================== */

        console.error("Contact form error:", error);

        status.textContent =
          "Unable to connect to the server. Please try again later.";

        status.style.color = "#d32f2f";
      } finally {
        /* =================================================
         RESTORE BUTTON
      ================================================= */

        if (submitButton) {
          submitButton.disabled = false;

          submitButton.textContent =
            submitButton.dataset.originalText || "Submit";
        }
      }
    });
  }

  /* =====================================================
     REFRESH
  ===================================================== */

  window.addEventListener("load", () => {
    ScrollTrigger.refresh();
  });
});
