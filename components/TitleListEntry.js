var TitleListEntry = (props) => {

  var showThisPic = function() {
    props.click(props.image);
  };

  return (
    <tr>
      <td className="title-name" onClick={showThisPic}>{props.image.name}</td>
    </tr>
  );
};

window.TitleListEntry = TitleListEntry;