function init() {
  document.querySelector('main').classList.remove('fade-out');
  const yearSpan = document.getElementById('year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
}
window.addEventListener('load', init);
