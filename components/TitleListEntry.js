var TitleListEntry = (props) => {

  var showThisPic = function() {
    console.log(props.image.path);
    props.click(props.image);
    // console.log(this.props.path);
  };

  //still might need to return stuff or look at this in general
  return (
    <tr>
      <td className="title-name" onClick={showThisPic}>{props.image.name}</td>
    </tr>
  );
};


// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.TitleListEntry = TitleListEntry;