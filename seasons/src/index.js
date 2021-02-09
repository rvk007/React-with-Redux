import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {
  // This is the first method that gets implemented when an instance of the class is called
  // A good place to initialize a state
  // constructor(props) {
  //   super(props);

  //   //This is the only time we do a direct assignment to this.state
  //   this.state = { lat: null, errorMessage: '' }; // there is alternate way to initialize state
  // }

  state = {
    lat: null,
    errorMessage: '',
  }; // With this there is no need for constructor to initialize state

  // // This method gets called just after render()
  // This gets called only one time and any kind of object initialization should be done here
  // componentDidMount() {
  //   console.log("'My component was rendered to the screen");
  // }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errorMessage: err.message })
    );
  }
  // // Just before this render method will be called
  // // This method gets called whenever any components gets updated
  // componentDidUpdate() {
  //   console.log('My component was just updated - it rerendered');
  // }
  // Render method is only there to return JSX. That's it
  // React needs a render method, else it will raise an error
  // The render method gets called many times, so the code in it gets implemented many times too.
  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }
    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }
    return <Spinner message="Please provide access to your location" />;
  }

  render() {
    return <div className="border red">{this.renderContent()}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
