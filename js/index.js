const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");
const Nosotros = document.querySelector("#nosotros-link");
const works = document.querySelector("#works-link");
const contact = document.querySelector("#contact-link");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("nav-menu_visible");

  if (navMenu.classList.contains("nav-menu_visible")) {
    navToggle.setAttribute("aria-label", "Cerrar menú");
  } else {
    navToggle.setAttribute("aria-label", "Abrir menú");
  }
});

Nosotros.addEventListener("click", () => {
  navMenu.classList.toggle("nav-menu_visible");
});
works.addEventListener("click", () => {
  navMenu.classList.toggle("nav-menu_visible");
});
contact.addEventListener("click", () => {
  navMenu.classList.toggle("nav-menu_visible");
});
