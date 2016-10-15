class App extends React.Component {
  constructor(props) {
    super(props);
  }

  onTitleClick(video) {
    //do something in here... set state?
  }

  render() {
    return (
      <div>
        <TitleList images = {this.props.images} click={this.onTitleClick.bind(this)} />
      </div>
    );
  }


}

window.App = App;