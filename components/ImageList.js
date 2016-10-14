class ImageList extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <table>
        <tbody>
          <ImageListEntry />
          <ImageListEntry/>
          <ImageListEntry />
        </tbody>
      </table>
    );
  }
}

console.log('ImageList');
// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.ImageList = ImageList;