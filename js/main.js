document.addEventListener('DOMContentLoaded', () => {
  if (window.feather) feather.replace();
  const navToggle = document.getElementById('navToggle');
  const menu = document.getElementById('menu');
  if (navToggle && menu) {
    navToggle.addEventListener('click', () => menu.classList.toggle('hidden'));
  }

  // Load Cloudflare Web Analytics
  const analytics = document.createElement('script');
  analytics.defer = true;
  analytics.src = 'https://static.cloudflareinsights.com/beacon.min.js';
  analytics.setAttribute('data-cf-beacon', '{"token": "YOUR_CLOUDFLARE_TOKEN"}');
  document.head.appendChild(analytics);

});
