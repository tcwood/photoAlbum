var imageData = [
  {
    id: 1,
    name: 'Birds on cliffs',
    path: './images/birds.jpg',
  },
  {
    id: 2,
    name: 'Church in Cuenca',
    path: './images/church.jpg',
  },
  {
    id: 3,
    name: 'Holy cow',
    path: './images/cows.jpg',
  },
  {
    id:4,
    name: 'Diving in',
    path: './images/surfer.jpg',
  },
  {
    id: 5,
    name: 'The one and only tia',
    path: './images/tia.jpg',
  }
];

ReactDOM.render(<App images={imageData}/>, document.getElementById("app"));

