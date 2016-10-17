class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentImage: props.images[0],
    };
  }

  onTitleClick(image) {
    this.setState({
      currentImage: image,
    });
  }

  onRatingClick(rating) {
    var currentIndex = this.findCurrIndex(this.state.currentImage.id);

    this.props.images[currentIndex].rating = rating;
    this.ratingSort();

    var newIndex = this.findCurrIndex(this.state.currentImage.id);

    this.setState({
      currentImage: this.props.images[newIndex],
    })
  }

  findCurrIndex(targetId) {
    var images = this.props.images;
    for(var i = 0; i < images.length; i ++) {
        if(images[i]['id'] === targetId) {
            return i;
        }
    }
    return -1;
  }

  ratingSort() {
    this.props.images.sort(function(a, b) {
      if (a.rating < b.rating) {
        return 1;
      } else {
        return -1;
      }
    })
  }


  render() {
    return (
      <div className="row">
        <div className="col-md-3">
          <TitleList images = {this.props.images} click={this.onTitleClick.bind(this)} />
          <ImageInfo imageCount = {this.props.images.length} image = {this.state.currentImage} />
          <Rating click = {this.onRatingClick.bind(this)}/>
        </div>
        <div className="col-md-5 col-md-offset-1">
          <ImageView image = {this.state.currentImage} />
        </div>
      </div>
    );
  }


}

window.App = App;