var TitleListEntry = (props) => (
  <tr>
    <td className="title-name">{props.name}</td>
  </tr>
);


// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.TitleListEntry = TitleListEntry;