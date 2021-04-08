import React from 'react';

class GoogleAuth extends React.Component {
  state = { isSignedIn: null };

  componentDidCatch() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client
        .init({
          clientId: CLIENT_ID,
          scope: 'email',
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.setState({ isSignedIn: this.auth.isSignedIn.get() });
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }
  onAuthChange = () => {
    this.setState({ isSignedIn: this.auth.isSignedIn.get() });
  };

  OnSignInClick = () => {
    this.auth.signIn();
  };

  OnSignOutClick = () => {
    this.auth.signOut();
  };

  renderAuthButton() {
    if (this.state.isSignedIn === null) {
      return null;
    } else if (this.state.isSignedIn) {
      return (
        <button className=" ui red google button" onClick={this.OnSignOutClick}>
          <i classname=" google icon" />
          Sign Out
        </button>
      );
    } else {
      return (
        <button className=" ui red google button" onClick={this.OnSignInClick}>
          <i classname=" google icon" />
          Sign In with Google
        </button>
      );
    }
  }
  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

export default GoogleAuth;
