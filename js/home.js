document.addEventListener('DOMContentLoaded', () => {
  const artists = [
    { name: 'Brian', img: 'img/brian.png' },
    { name: 'Matt', img: 'img/matt.png' },
    { name: 'Mike', img: 'img/mike.png' }
  ];

  const artistList = document.querySelector('#featured-artists .artist-list');
  artists.forEach(artist => {
    const div = document.createElement('div');
    div.className = 'artist-item';
    div.innerHTML = `<img src="${artist.img}" alt="${artist.name}"><h4>${artist.name}</h4>`;
    artistList.appendChild(div);
  });

  const events = [
    { date: 'May 1, 2024', venue: 'Club XY', city: 'NYC' },
    { date: 'Jun 10, 2024', venue: 'The Hall', city: 'Chicago' },
    { date: 'Jul 15, 2024', venue: 'Sunset Lounge', city: 'LA' }
  ];

  const eventList = document.querySelector('#upcoming-events .event-list');
  events.forEach(ev => {
    const div = document.createElement('div');
    div.className = 'event-item';
    div.textContent = `${ev.date} - ${ev.venue}, ${ev.city}`;
    eventList.appendChild(div);
  });
});
