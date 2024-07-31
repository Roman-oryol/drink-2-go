const map = L.map('map')
  .setView({
    lat: 59.96831,
    lng: 30.31748,
  }, 19);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors | Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>',
  },
).addTo(map);


const pinIcon = L.icon({
  iconUrl: './images/map-pin@1x.png',
  iconSize: [38, 50],
  iconAnchor: [18, 50],
});

const pinMarker = L.marker(
  {
    lat: 59.96831,
    lng: 30.31748,
  },
  {
    icon: pinIcon,
  },
);

pinMarker.addTo(map);
