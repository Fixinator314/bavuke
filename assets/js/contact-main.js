/* =========================================================
   BAVUKE FOUNDATION
   CONTACT — MAIN SECTION
========================================================= */

document.addEventListener("DOMContentLoaded", () => {
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

  /* =======================================================
     CONTACT FORM → BACKEND
     
     IMPORTANT:
     This is kept OUTSIDE the GSAP check.
     The form must work even if GSAP is unavailable.
  ======================================================= */

  if (contactForm && status) {
    contactForm.addEventListener("submit", async (event) => {
      event.preventDefault();

      console.log("Bavuke contact form submitted.");

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
         DEBUG
      ================================================= */

      console.log("Form data:", {
        name,
        email,
        subject,
        message,
      });

      /* =================================================
         VALIDATION
      ================================================= */

      if (!name || !email || !subject || !message) {
        status.textContent = "Please complete all required fields.";

        status.style.color = "#d32f2f";

        console.warn("Contact form validation failed.");

        return;
      }

      /* =================================================
         BUTTON
      ================================================= */

      const submitButton = contactForm.querySelector('button[type="submit"]');

      let originalButtonText = "SEND MESSAGE";

      if (submitButton) {
        originalButtonText = submitButton.textContent;

        submitButton.disabled = true;

        submitButton.textContent = "SENDING...";
      }

      /* =================================================
         STATUS
      ================================================= */

      status.textContent = "Sending your message...";

      status.style.color = "#ffc107";

      /* =================================================
         DATA
      ================================================= */

      const formData = {
        name,
        email,
        subject,
        message,
      };

      /* =================================================
         SEND TO EXPRESS API
      ================================================= */

      try {
        console.log("Sending request to Bavuke API...");

        const response = await fetch("http://localhost:5000/api/contact", {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify(formData),
        });

        console.log("API response status:", response.status);

        const data = await response.json();

        console.log("API response:", data);

        /* =================================================
           SUCCESS
        ================================================= */

        if (response.ok && data.success) {
          status.textContent =
            "Thank you for contacting Bavuke Foundation. Your message has been received.";

          status.style.color = "#ffffff";

          contactForm.reset();

          console.log("✅ Contact submission successfully saved.");
        } else {

        /* =================================================
           SERVER ERROR
        ================================================= */
          status.textContent =
            data.message ||
            "Something went wrong while submitting your message.";

          status.style.color = "#ff4d4d";

          console.error("❌ API error:", data);
        }
      } catch (error) {
        /* ===================================================
         NETWORK ERROR
      =================================================== */

        console.error("❌ Contact form network error:", error);

        status.textContent =
          "Unable to connect to the server. Please try again later.";

        status.style.color = "#ff4d4d";
      } finally {
        /* =================================================
         RESTORE BUTTON
      ================================================= */

        if (submitButton) {
          submitButton.disabled = false;

          submitButton.textContent = originalButtonText;
        }
      }
    });
  }

  /* =======================================================
     GSAP
     
     Everything below this point is ONLY animation.
  ======================================================= */

  if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") {
    console.warn(
      "GSAP or ScrollTrigger is not loaded. Contact form will still work.",
    );

    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  /* =====================================================
     INTRO
  ===================================================== */

  if (section && information) {
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
     FORM ANIMATION
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
     FORM FIELD ANIMATION
  ===================================================== */

  if (fields.length && form) {
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
     REFRESH
  ===================================================== */

  window.addEventListener("load", () => {
    ScrollTrigger.refresh();
  });
});
