var ImageList = (props) => (
      <table>
        <tbody>
          { props.images.map( image=>( <ImageListEntry image={image} />))}

        </tbody>
      </table>
);

console.log('ImageList');
// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.ImageList = ImageList;