// El checkbox controla el menú móvil mediante la regla #menu:checked del CSS.
const menu = document.getElementById('menu');
const navbar = document.querySelector('.navbar');

if (menu && navbar) {
  navbar.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      menu.checked = false;
    });
  });
}

// Desplazamiento suave al hacer clic en anclas internas
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.getElementById(this.getAttribute('href').slice(1));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
    // Cerrar menú móvil si está abierto
    if (menu) menu.checked = false;
  });
});
