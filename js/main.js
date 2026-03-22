// ==============================
//  JS - NAVBAR
// ==============================

document.addEventListener("DOMContentLoaded", () => {

  const menu = document.getElementById("menuPrincipal");
  const navLinks = document.querySelectorAll("#menuPrincipal .nav-link");
  const navbar = document.querySelector("header");

  //  1. Cerrar menú al hacer click (mobile)
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      if (menu.classList.contains("show")) {
        new bootstrap.Collapse(menu).hide();
      }
    });
  });

  //  2. Activar link actual automáticamente
  const currentPage = window.location.pathname.split("/").pop();

  navLinks.forEach(link => {
    const linkPage = link.getAttribute("href");

    if (linkPage === currentPage || linkPage === "") {
      link.classList.add("active");
    }
  });

  //  3. Efecto scroll navbar
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("navbar-scroll");
    } else {
      navbar.classList.remove("navbar-scroll");
    }
  });

});