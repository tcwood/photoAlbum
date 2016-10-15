var imageData = [
  {
    name: 'Birds on cliffs',
    path: './images/birds.jpg',
  },
  {
    name: 'Church in Cuenca',
    path: './images/church.jpg',
  },
  {
    name: 'Holy cow',
    path: './images/cows.jpg',
  },
  {
    name: 'Diving in',
    path: './images/surfer.jpg',
  },
  {
    name: 'The one and only tia',
    path: './images/tia.jpg',
  }
];

// ReactDOM.render(<ImageList images={imageData} />, document.getElementById("image"));
ReactDOM.render(<App images={imageData}/>, document.getElementById("app"));

