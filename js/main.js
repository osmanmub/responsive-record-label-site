document.addEventListener('DOMContentLoaded', () => {
  if (window.feather) feather.replace();
  const navToggle = document.getElementById('navToggle');
  const menu = document.getElementById('menu');
  if (navToggle && menu) {
    navToggle.addEventListener('click', () => menu.classList.toggle('hidden'));
  }
});
