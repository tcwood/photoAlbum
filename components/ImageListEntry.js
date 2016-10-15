var ImageListEntry = (props) => {
  console.log('props form image list entry', props);

 return (
    <img className='image' src={props.image.path} />
  )
}

window.ImageListEntry = ImageListEntry;