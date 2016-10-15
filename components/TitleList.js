var TitleList = (props) => (
  <table>
    <tbody>
      { props.images.map( image=>( <TitleListEntry name={image.name} />))}
    </tbody>
  </table>
);

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.TitleList = TitleList;