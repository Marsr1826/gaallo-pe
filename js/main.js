document.addEventListener('DOMContentLoaded', () => {
  if (window.AOS) AOS.init({ duration: 600, once: true });
  const form = document.querySelector('#contact-form');
  if (form) form.addEventListener('submit', event => {
    event.preventDefault();
    const aviso = document.querySelector('#form-aviso');
    aviso.textContent = '¡Gracias! Este formulario es una demostración. Para enviarnos un mensaje, escríbenos por Instagram.';
    form.reset();
  });
});
