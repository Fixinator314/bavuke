document.getElementById("current-year").textContent = new Date().getFullYear();

document.getElementById("current-year").textContent = new Date().getFullYear();

const menu = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");
const overlay = document.querySelector(".nav-overlay");

menu.addEventListener("click", () => {
  menu.classList.toggle("active");
  nav.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("menu-open");
});

overlay.addEventListener("click", closeMenu);

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", closeMenu);
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeMenu();
  }
});

function closeMenu() {
  menu.classList.remove("active");
  nav.classList.remove("active");
  overlay.classList.remove("active");
  document.body.classList.remove("menu-open");
}
