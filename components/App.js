class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentImage: props.images[0]
    };
  }

  onTitleClick(image) {
    console.log(image);
    this.setState({
      currentImage: image
    });
  }

  render() {
    return (
      <div>
        <TitleList images = {this.props.images} click={this.onTitleClick.bind(this)} />
        <ImageInfo imageCount = {this.props.images.length} image = {this.state.currentImage} />
        <ImageView image = {this.state.currentImage} />
      </div>
    );
  }


}

window.App = App;