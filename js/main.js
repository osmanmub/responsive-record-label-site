document.addEventListener('DOMContentLoaded', () => {
  const font = document.createElement('link');
  font.rel = 'stylesheet';
  font.href = 'https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap';
  document.head.appendChild(font);

  const siteStyles = document.createElement('style');
  siteStyles.textContent = `
    :root {
      --alafia-ink: #0c0c0b;
      --alafia-paper: #f2f0eb;
      --alafia-mist: #e7e4dd;
      --alafia-line: rgba(12, 12, 11, .13);
      --alafia-muted: #6b6962;
      --alafia-accent: #d7ff3f;
    }

    html { background: var(--alafia-paper); }
    body {
      background: var(--alafia-paper) !important;
      color: var(--alafia-ink) !important;
      font-family: 'Plus Jakarta Sans', system-ui, sans-serif !important;
      letter-spacing: -.01em;
    }

    header {
      height: 76px;
      background: rgba(242, 240, 235, .88) !important;
      border-bottom-color: var(--alafia-line) !important;
      backdrop-filter: blur(16px);
    }

    header > div { height: 76px !important; }
    header a:not(.alafia-brand) {
      position: relative;
      color: var(--alafia-ink) !important;
      letter-spacing: .08em;
      text-transform: uppercase;
      text-decoration: none !important;
    }
    header a:not(.alafia-brand)::after {
      position: absolute;
      right: 0;
      bottom: -7px;
      left: 0;
      height: 1px;
      content: '';
      background: currentColor;
      transform: scaleX(0);
      transform-origin: left;
      transition: transform .24s ease;
    }
    header a:not(.alafia-brand):hover::after { transform: scaleX(1); }

    .alafia-brand {
      display: inline-flex;
      align-items: center;
      gap: .8rem;
      color: var(--alafia-ink) !important;
      font-size: 11px;
      font-weight: 800;
      letter-spacing: .16em;
      line-height: 1;
      text-decoration: none;
      text-transform: uppercase;
    }
    .alafia-brand__mark {
      display: inline-flex;
      width: 32px;
      height: 36px;
      flex: 0 0 32px;
      color: var(--alafia-ink);
    }
    .alafia-brand__mark img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .alafia-brand--inverse { color: var(--alafia-paper) !important; }
    .alafia-brand--inverse .alafia-brand__mark { color: var(--alafia-paper); }
    .alafia-brand__wordmark { white-space: nowrap; }

    .relative.isolate.overflow-hidden.min-h-screen {
      min-height: min(760px, calc(100vh - 76px)) !important;
      background:
        radial-gradient(circle at 72% 32%, rgba(215, 255, 63, .22), transparent 20rem),
        radial-gradient(circle at 18% 82%, rgba(255, 255, 255, .11), transparent 24rem),
        var(--alafia-ink);
      isolation: isolate;
    }
    .relative.isolate.overflow-hidden.min-h-screen > .bg-black {
      background:
        linear-gradient(118deg, rgba(12, 12, 11, .08), rgba(12, 12, 11, .48)) !important;
    }
    .relative.isolate.overflow-hidden.min-h-screen::after {
      position: absolute;
      right: 7vw;
      bottom: -4.5rem;
      z-index: -1;
      width: min(42vw, 430px);
      height: min(42vw, 430px);
      content: '';
      border: 1px solid rgba(242, 240, 235, .26);
      border-radius: 50%;
      box-shadow: 0 0 0 34px rgba(242, 240, 235, .06), 0 0 0 68px rgba(242, 240, 235, .035);
    }
    .relative.isolate h1 {
      max-width: 11ch;
      margin-inline: auto;
      font-size: clamp(3.2rem, 7.4vw, 7.5rem) !important;
      font-weight: 800 !important;
      letter-spacing: -.075em !important;
      line-height: .92 !important;
    }
    .relative.isolate p { max-width: 43rem; margin-inline: auto; color: rgba(255,255,255,.76) !important; }

    section.py-24 { padding-block: clamp(4.5rem, 9vw, 8rem) !important; }
    .bg-neutral-50 { background: var(--alafia-mist) !important; }
    .h-px, hr { background: var(--alafia-line) !important; border-color: var(--alafia-line) !important; }

    h1, h2, h3 {
      color: var(--alafia-ink);
      font-weight: 800 !important;
      letter-spacing: -.045em;
    }
    main h1, main > h1 { font-size: clamp(2.5rem, 5vw, 4.5rem) !important; line-height: .95; }
    main > p, main h1 + p { max-width: 43rem; color: var(--alafia-muted) !important; }

    .grid.gap-12 > a,
    .grid.gap-12 > div,
    .space-y-12 > article,
    .space-y-16 > article {
      transition: transform .24s ease, box-shadow .24s ease, border-color .24s ease;
    }
    .grid.gap-12 > a:hover,
    .grid.gap-12 > div:hover,
    .space-y-12 > article:hover,
    .space-y-16 > article:hover { transform: translateY(-5px); }

    img {
      border-color: var(--alafia-line) !important;
      border-radius: 2px;
    }
    .grid.gap-12 > a img,
    .grid.gap-12 > div img {
      box-shadow: 10px 10px 0 var(--alafia-mist);
      transition: filter .3s ease, transform .3s ease;
    }
    .grid.gap-12 > a:hover img,
    .grid.gap-12 > div:hover img { filter: saturate(1.08) contrast(1.03); transform: scale(.985); }

    .border, .border-t, .border-b { border-color: var(--alafia-line) !important; }
    .rounded-lg { border-radius: 2px !important; }
    .text-neutral-500, .text-neutral-600, .text-neutral-700 { color: var(--alafia-muted) !important; }

    button, input {
      border-radius: 0 !important;
      font-family: 'DM Mono', monospace !important;
    }
    button { letter-spacing: .06em; text-transform: uppercase; }
    input:focus { --tw-ring-color: var(--alafia-ink) !important; }

    footer.alafia-footer {
      padding: clamp(3rem, 6vw, 5.5rem) 1.5rem 1.5rem !important;
      background: var(--alafia-ink);
      border: 0 !important;
      color: rgba(242, 240, 235, .68) !important;
      font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
      letter-spacing: normal;
      text-align: left;
      text-transform: none;
    }
    .alafia-footer__inner {
      display: grid;
      grid-template-columns: minmax(0, 1.6fr) minmax(12rem, 1fr);
      gap: 3rem;
      width: min(100%, 72rem);
      margin: 0 auto;
    }
    .alafia-footer .alafia-brand {
      margin-bottom: 1.2rem;
      color: var(--alafia-paper) !important;
    }
    .alafia-footer__statement {
      max-width: 28rem;
      margin: 0;
      color: rgba(242, 240, 235, .68);
      font-size: .94rem;
      line-height: 1.65;
    }
    .alafia-footer__label {
      margin: 0 0 .9rem;
      color: var(--alafia-accent);
      font-family: 'DM Mono', monospace;
      font-size: .68rem;
      font-weight: 500;
      letter-spacing: .12em;
      text-transform: uppercase;
    }
    .alafia-footer__links {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: .8rem 1.5rem;
      margin: 0;
      padding: 0;
      list-style: none;
    }
    .alafia-footer__links a {
      color: var(--alafia-paper);
      font-size: .84rem;
      font-weight: 600;
      letter-spacing: .03em;
      text-decoration: none;
    }
    .alafia-footer__links a:hover { color: var(--alafia-accent); }
    .alafia-footer__meta {
      display: flex;
      justify-content: space-between;
      gap: 1rem;
      width: min(100%, 72rem);
      margin: clamp(2.5rem, 5vw, 4rem) auto 0;
      padding-top: 1rem;
      border-top: 1px solid rgba(242, 240, 235, .18);
      color: rgba(242, 240, 235, .46);
      font-family: 'DM Mono', monospace;
      font-size: .65rem;
      letter-spacing: .08em;
      text-transform: uppercase;
    }

    @media (max-width: 639px) {
      header, header > div { height: 66px !important; }
      body { padding-top: 66px !important; }
      #menu {
        top: 66px !important;
        background: var(--alafia-paper) !important;
        border-color: var(--alafia-line) !important;
      }
      #menu a { display: block; padding-block: .5rem; }
      .alafia-brand__wordmark { display: none; }
      .alafia-brand { gap: 0; }
      .relative.isolate.overflow-hidden.min-h-screen::after { right: -6rem; width: 18rem; height: 18rem; }
      footer.alafia-footer { padding-inline: 1.5rem !important; }
      .alafia-footer__inner { grid-template-columns: 1fr; gap: 2.5rem; }
      .alafia-footer__links { grid-template-columns: repeat(3, minmax(0, 1fr)); gap: .8rem; }
      .alafia-footer__meta { flex-direction: column; }
    }
  `;
  document.head.appendChild(siteStyles);

  const brand = document.querySelector('header a[href="index.html"]');
  if (brand) {
    brand.className = 'alafia-brand mr-auto';
    brand.setAttribute('aria-label', 'Alafia Collective home');
    brand.innerHTML = '<span class="alafia-brand__mark" aria-hidden="true"><img src="img/alafia-x-mark.svg" alt="" /></span><span class="alafia-brand__wordmark">Alafia Collective</span>';
  }

  const menu = document.getElementById('menu');
  if (menu && !menu.querySelector('a[href="alumni.html"]')) {
    const alumniItem = document.createElement('li');
    alumniItem.innerHTML = '<a href="alumni.html" class="hover:underline">Alumni</a>';
    const rosterItem = menu.querySelector('a[href="roster.html"]')?.closest('li');
    if (rosterItem) rosterItem.insertAdjacentElement('afterend', alumniItem);
    else menu.prepend(alumniItem);
  }

  const footer = document.querySelector('footer');
  if (footer) {
    footer.className = 'alafia-footer';
    footer.innerHTML =
      '<div class="alafia-footer__inner">' +
        '<div>' +
          '<a class="alafia-brand alafia-brand--inverse" href="index.html" aria-label="Alafia Collective home">' +
            '<span class="alafia-brand__mark" aria-hidden="true"><img src="img/alafia-x-mark.svg" alt="" /></span>' +
            '<span class="alafia-brand__wordmark">Alafia Collective</span>' +
          '</a>' +
          '<p class="alafia-footer__statement">Management, label services and publishing for Africa’s next generation of global icons.</p>' +
        '</div>' +
        '<div>' +
          '<p class="alafia-footer__label">Explore</p>' +
          '<ul class="alafia-footer__links">' +
            '<li><a href="roster.html">Current Roster</a></li>' +
            '<li><a href="alumni.html">Alumni</a></li>' +
            '<li><a href="playlists.html">Playlists</a></li>' +
            '<li><a href="events.html">Events</a></li>' +
            '<li><a href="blog.html">Journal</a></li>' +
          '</ul>' +
        '</div>' +
      '</div>' +
      '<div class="alafia-footer__meta"><span>© ' + new Date().getFullYear() + ' Alafia Collective</span><span>Africa, without borders</span></div>';
  }

  if (window.feather) feather.replace();
  const navToggle = document.getElementById('navToggle');
  if (navToggle && menu) {
    navToggle.addEventListener('click', () => menu.classList.toggle('hidden'));
  }

  const analytics = document.createElement('script');
  analytics.defer = true;
  analytics.src = 'https://static.cloudflareinsights.com/beacon.min.js';
  analytics.setAttribute('data-cf-beacon', '{"token": "YOUR_CLOUDFLARE_TOKEN"}');
  document.head.appendChild(analytics);
});
