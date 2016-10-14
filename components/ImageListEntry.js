var ImageListEntry = (props) => (
  <tr>
    <td className="image-name">{props.image.name}</td>
    <td>
      <img className='image' src={props.image.path} />
    </td>
  </tr>
)


// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.ImageListEntry = ImageListEntry;