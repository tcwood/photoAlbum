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
    // ReactDOM.render(<ImageListEntry />, document.getElementById("image"));
    //do something in here... set state?
  }

  render() {
    return (
      <div>
        <TitleList images = {this.props.images} click={this.onTitleClick.bind(this)} />
        <ImageListEntry image = {this.state.currentImage} />
      </div>
    );
  }


}

window.App = App;