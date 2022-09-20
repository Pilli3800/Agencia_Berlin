const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");
const Nosotros = document.querySelector("#nosotros-link");
const servicios = document.querySelector("#servicios-link");
const contacto = document.querySelector("#contacto-link");

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
servicios.addEventListener("click", () => {
  navMenu.classList.toggle("nav-menu_visible");
});
contacto.addEventListener("click", () => {
  navMenu.classList.toggle("nav-menu_visible");
});
