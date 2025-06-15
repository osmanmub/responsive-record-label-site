document.addEventListener('DOMContentLoaded', () => {
  if (window.feather) feather.replace();
  const navToggle = document.getElementById('navToggle');
  const menu = document.getElementById('menu');
  if (navToggle && menu) {
    navToggle.addEventListener('click', () => menu.classList.toggle('hidden'));
  }

  const popup = document.getElementById('promoPopup');
  const close = document.getElementById('promoClose');
  if (popup) {
    popup.classList.remove('hidden');
    if (close) {
      close.addEventListener('click', () => popup.classList.add('hidden'));
    }
  }
});
