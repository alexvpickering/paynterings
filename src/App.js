import React from "react";
import Routes from "./Routes";
import { authUser } from "./libs/awsLib";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      sticky: false,
      navHeight: 0,
      isAuthenticated: false,
      isAuthenticating: true
    };
  }

  userHasAuthenticated = authenticated => {
    this.setState({ isAuthenticated: authenticated });
  };

  handleLogout = event => {
    this.userHasAuthenticated(false);
  };

  async componentDidMount() {
    try {
      if (await authUser()) {
        this.userHasAuthenticated(true);
      }
    } catch (e) {
      alert(e);
    }

    this.setState({ isAuthenticating: false });

    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = e => {
    const sticky =
      window.pageYOffset > window.innerHeight - this.state.navHeight;
    if (sticky !== this.state.sticky) this.setState({ sticky });
  };

  getNavHeight = el => {
    this.setState({
      navHeight: el.offsetHeight
    });
  };

  render() {
    return (
      !this.state.isAuthenticating && (
        <Routes
          sticky={this.state.sticky}
          navHeight={this.state.navHeight}
          getNavHeight={this.getNavHeight}
          isAuthenticated={this.state.isAuthenticated}
          userHasAuthenticated={this.userHasAuthenticated}
          handleLogout={this.handleLogout}
        />
      )
    );
  }
}

export default App;
