document.addEventListener('DOMContentLoaded', () => {
  const brandStyles = document.createElement('style');
  brandStyles.textContent = `
    .alafia-brand {
      display: inline-flex;
      align-items: center;
      gap: .7rem;
      color: #111 !important;
      font-size: 11px;
      font-weight: 700;
      letter-spacing: .16em;
      line-height: 1;
      text-decoration: none;
      text-transform: uppercase;
    }
    .alafia-brand__mark {
      position: relative;
      display: inline-block;
      width: 34px;
      height: 34px;
      flex: 0 0 34px;
      overflow: hidden;
      background: #090909;
    }
    .alafia-brand__mark::before,
    .alafia-brand__mark::after {
      position: absolute;
      top: 3px;
      left: 13px;
      width: 8px;
      height: 28px;
      content: "";
      background: #fff;
      transform: rotate(34deg);
    }
    .alafia-brand__mark::after { transform: rotate(-34deg); }
    .alafia-brand__wordmark { white-space: nowrap; }
    @media (max-width: 420px) {
      .alafia-brand__wordmark { display: none; }
      .alafia-brand { gap: 0; }
    }
  `;
  document.head.appendChild(brandStyles);

  const brand = document.querySelector('header a[href="index.html"]');
  if (brand) {
    brand.className = 'alafia-brand mr-auto';
    brand.setAttribute('aria-label', 'Alafia Collective home');
    brand.innerHTML = '<span class="alafia-brand__mark" aria-hidden="true"></span><span class="alafia-brand__wordmark">Alafia Collective</span>';
  }

  if (window.feather) feather.replace();
  const navToggle = document.getElementById('navToggle');
  const menu = document.getElementById('menu');
  if (navToggle && menu) {
    navToggle.addEventListener('click', () => menu.classList.toggle('hidden'));
  }

  const analytics = document.createElement('script');
  analytics.defer = true;
  analytics.src = 'https://static.cloudflareinsights.com/beacon.min.js';
  analytics.setAttribute('data-cf-beacon', '{"token": "YOUR_CLOUDFLARE_TOKEN"}');
  document.head.appendChild(analytics);
});
