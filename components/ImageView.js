var ImageView = (props) => {

 return (
    <img className='image' src={props.image.path} />
  )
}

window.ImageView = ImageView;