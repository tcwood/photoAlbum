// var imageData = [
//   {
//     name: 'Birds on cliffs',
//     image: './images/birds.jpg',
//   },
//   {
//     name: 'Church in Cuenca',
//     image: './images/church.jpg',
//   },
//   {
//     name: 'Holy cow',
//     image: './images/cows.jpg',
//   },
//   {
//     name: 'Diving in',
//     image: './images/surfer.jpg',
//   },
//   {
//     name: 'The one and only tia',
//     image: './images/tia.jpg',
//   }
// ];
class ImageList extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <h1>HelloWorld</h1>
    )
  };
}


ReactDOM.render(
  <ImageList />,
   document.getElementById('app')
);

// ReactDOM.render(
//   <FishTable fishes={fishData}/>,
//   document.getElementById('app')
// );
