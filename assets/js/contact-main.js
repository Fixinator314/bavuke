/* =========================================================
   BAVUKE FOUNDATION
   CONTACT: MAIN SECTION
========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  const FORM_HANDLER = "./contact.php";
  const REQUEST_TIMEOUT = 15000; // ms

  const STATUS_COLORS = {
    info: "#ffc107",
    success: "#ffffff",
    error: "#ff4d4d",
  };

  /* -------------------------------------------------------
     ELEMENTS
  ------------------------------------------------------- */
  const section = document.querySelector(".contact-main");
  const information = document.querySelector(".contact-information");
  const details = document.querySelectorAll(".contact-detail");
  const formWrapper = document.querySelector(".contact-form-wrapper");
  const fields = document.querySelectorAll(".form-field");
  const contactForm = document.querySelector("#contact-form");
  const status = document.querySelector("#contact-form-status");

  /* =======================================================
     CONTACT FORM
     Runs independently of GSAP, so the form always works.
  ======================================================= */

  function setStatus(message, type = "info") {
    status.textContent = message;
    status.style.color = STATUS_COLORS[type];
  }

  function getFormValues() {
    const value = (name) =>
      contactForm.querySelector(`[name="${name}"]`)?.value.trim() || "";

    return {
      name: value("name"),
      email: value("email"),
      subject: value("subject"),
      message: value("message"),
    };
  }

  async function submitForm(payload) {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), REQUEST_TIMEOUT);

    try {
      const response = await fetch(FORM_HANDLER, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        signal: controller.signal,
      });

      // Read as text first so an unexpected reply (404 page, PHP error)
      // can be logged instead of failing silently.
      const raw = await response.text();
      console.log("Contact form response:", response.status, raw);

      let data;
      try {
        data = JSON.parse(raw);
      } catch {
        throw new Error(
          `Unexpected reply from server (status ${response.status})`,
        );
      }

      return { ok: response.ok && data.success, message: data.message };
    } finally {
      clearTimeout(timer);
    }
  }

  function initContactForm() {
    if (!contactForm || !status) return;

    const submitButton = contactForm.querySelector('button[type="submit"]');
    const buttonLabel = submitButton?.querySelector("span");
    const originalLabel = buttonLabel?.textContent.trim() || "SEND MESSAGE";

    function setSending(isSending) {
      if (!submitButton) return;
      submitButton.disabled = isSending;
      if (buttonLabel) {
        buttonLabel.textContent = isSending ? "SENDING..." : originalLabel;
      }
    }

    contactForm.addEventListener("submit", async (event) => {
      event.preventDefault();

      const payload = getFormValues();

      if (Object.values(payload).some((v) => !v)) {
        setStatus("Please complete all required fields.", "error");
        return;
      }

      setSending(true);
      setStatus("Sending your message...", "info");

      try {
        const result = await submitForm(payload);

        if (result.ok) {
          setStatus(
            "Thank you for contacting Bavuke Foundation. Your message has been received.",
            "success",
          );
          contactForm.reset();
        } else {
          setStatus(
            result.message ||
              "Something went wrong while submitting your message.",
            "error",
          );
        }
      } catch (error) {
        console.error("Contact form error:", error);
        setStatus(
          "Unable to send your message right now. Please try again later.",
          "error",
        );
      } finally {
        setSending(false);
      }
    });
  }

  /* =======================================================
     ANIMATIONS (GSAP)
     Everything below is animation only.
  ======================================================= */

  function initAnimations() {
    if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") {
      console.warn("GSAP or ScrollTrigger not loaded. Skipping animations.");
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    // Fades and slides elements in once when their trigger scrolls into view
    function reveal(targets, from, to, trigger, start) {
      gsap.fromTo(
        targets,
        { opacity: 0, ...from },
        {
          opacity: 1,
          x: 0,
          y: 0,
          ease: "power3.out",
          ...to,
          scrollTrigger: { trigger, start, once: true },
        },
      );
    }

    if (section && information) {
      reveal(information, { x: -60 }, { duration: 0.9 }, section, "top 70%");
    }

    if (details.length) {
      reveal(
        details,
        { y: 25 },
        { duration: 0.6, stagger: 0.12 },
        details[0],
        "top 85%",
      );
    }

    if (section && formWrapper) {
      reveal(formWrapper, { x: 60 }, { duration: 0.9 }, section, "top 65%");
    }

    if (formWrapper && fields.length) {
      reveal(
        fields,
        { y: 20 },
        { duration: 0.5, stagger: 0.08, ease: "power2.out" },
        formWrapper,
        "top 70%",
      );
    }

    window.addEventListener("load", () => ScrollTrigger.refresh());
  }

  /* -------------------------------------------------------
     INIT
  ------------------------------------------------------- */
  initContactForm();
  initAnimations();
});
