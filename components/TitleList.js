var TitleList = (props) => (
  <table className="table-list">
    <tbody>
      { props.images.map( image=>( 
        <TitleListEntry image={image} click={props.click}/>
        ))}
    </tbody>
  </table>
);

window.TitleList = TitleList;