var ImageInfo = (props) => (
  <span className='image-info'>{props.image.name + ': ' + props.image.id + ' of ' + props.imageCount}</span>
);

window.ImageInfo = ImageInfo;
