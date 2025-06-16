document.addEventListener('DOMContentLoaded', () => {
  if (window.feather) feather.replace();
  const navToggle = document.getElementById('navToggle');
  const menu = document.getElementById('menu');
  if (navToggle && menu) {
    navToggle.addEventListener('click', () => menu.classList.toggle('hidden'));
  }

  const closeVideo = document.getElementById('closeVideo');
  const heroVideo = document.getElementById('heroVideo');
  if (closeVideo && heroVideo) {
    closeVideo.addEventListener('click', () => {
      heroVideo.pause();
      heroVideo.remove();
      closeVideo.remove();
    });
  }
});
