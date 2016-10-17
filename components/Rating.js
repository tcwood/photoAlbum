var Rating = (props) => {

  var changeRating = function(rating) {
    props.click(rating)
  }

  return (
    <div className="dropdown">
      <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Rating
      <span className="caret"></span></button>
      <ul className="dropdown-menu">
        <li><a href="#" onClick={changeRating.bind(null, 1)}>1</a></li>
        <li><a href="#" onClick={changeRating.bind(null, 2)}>2</a></li>
        <li><a href="#" onClick={changeRating.bind(null, 3)}>3</a></li>
        <li><a href="#" onClick={changeRating.bind(null, 4)}>4</a></li>
        <li><a href="#" onClick={changeRating.bind(null, 5)}>5</a></li>
      </ul>
    </div>
  )
};

window.Rating = Rating;
