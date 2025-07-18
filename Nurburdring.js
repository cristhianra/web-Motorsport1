// Animación de entrada para todas las secciones
document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll(
    '.ganador, .Carro, .Nurburdirngtarde, .Nurburdirngnoche, .Pista'
  );

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animation = 'fadeInUp 1s forwards';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  sections.forEach(section => {
    section.style.opacity = 0;
    observer.observe(section);
  });
});
