var ImageInfo = (props) => (
  <div>
    <span>
      {props.image.name + ': ' + props.image.id + ' of ' + props.imageCount}
    </span> 
    <br></br>
    <span> Rating: {props.image.rating || 'none'} </span>
  </div>
);

window.ImageInfo = ImageInfo;
