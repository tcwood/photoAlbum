class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentImage: props.images[0],
      currentImageId: 0
    };
  }

  onTitleClick(image) {
    this.setState({
      currentImage: image,
      currentImageId: image.id
    });
  }

  onRatingClick(rating) {

    // console.log(this.state.currentImageId);
    this.props.images[this.state.currentImageId].rating = rating;
    this.setState({
      currentImage: this.props.images[this.state.currentImageId],
      currentImageId: this.state.currentImageId
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