var ImageView = (props) => {
  console.log('props form image list entry', props);

 return (
    <img className='image' src={props.image.path} />
  )
}

window.ImageView = ImageView;