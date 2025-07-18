// Animación al hacer scroll
window.addEventListener('scroll', function () {
  let elementos = document.querySelectorAll('.infolemans div');
  let scrollTop = window.scrollY + window.innerHeight;

  elementos.forEach(el => {
    if (el.offsetTop < scrollTop - 100) {
      el.classList.add('visible');
      el.classList.add('reveal');
    }
  });
});
