/* =========================================================
   BAVUKE FOUNDATION
   MAIN JAVASCRIPT
========================================================= */

/* =========================================================
   DOM READY
========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  /* =======================================================
     CURRENT YEAR
  ======================================================= */

  const currentYear = document.getElementById("current-year");

  if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
  }

  /* =======================================================
     NAVIGATION
  ======================================================= */

  const menu = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav-links");
  const overlay = document.querySelector(".nav-overlay");

  if (!menu || !nav || !overlay) {
    return;
  }

  /* =======================================================
     OPEN / CLOSE MENU
  ======================================================= */

  menu.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("active");

    nav.classList.toggle("active");

    overlay.classList.toggle("active");

    document.body.classList.toggle("menu-open");

    menu.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  /* =======================================================
     CLOSE MENU
  ======================================================= */

  function closeMenu() {
    menu.classList.remove("active");

    nav.classList.remove("active");

    overlay.classList.remove("active");

    document.body.classList.remove("menu-open");

    menu.setAttribute("aria-expanded", "false");
  }

  /* =======================================================
     OVERLAY
  ======================================================= */

  overlay.addEventListener("click", closeMenu);

  /* =======================================================
     NAV LINKS
  ======================================================= */

  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  /* =======================================================
     ESCAPE KEY
  ======================================================= */

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
    }
  });
});
