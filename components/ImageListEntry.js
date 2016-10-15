var ImageListEntry = (props) => {
  console.log('props form image list entry', props);

 return (
    <img className='image' src={props.image.path} />
  )
}


// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.ImageListEntry = ImageListEntry;