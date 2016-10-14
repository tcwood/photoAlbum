class ImageListEntry extends React.Component {
  constructor(props) {
    super();
  }

  render () {
    return (
      <tr>
        <td className="image-name">Birds</td>
        <td>
          <img className='image' src='../images/birds.jpg' />
        </td>
      </tr>
    )
  }
}


// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.ImageListEntry = ImageListEntry;