var ImageList = (props) => (
  <table>
    <tbody>
      { props.images.map( image=>( <ImageListEntry image={image} />))}
    </tbody>
  </table>
);

console.log('ImageList');
window.ImageList = ImageList;