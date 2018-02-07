import React from "react";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      sticky: false,
      navHeight: 0
    };
  }

  componentDidMount() {
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
      <Router basename={process.env.PUBLIC_URL}>
        <div>
          <Route
            exact
            path="/"
            render={() => (
              <Home
                sticky={this.state.sticky}
                navHeight={this.state.navHeight}
                getNavHeight={this.getNavHeight}
              />
            )}
          />
          <Route
            exact
            path="/login"
            render={() => (
              <Login
                sticky={this.state.sticky}
                navHeight={this.state.navHeight}
                getNavHeight={this.getNavHeight}
              />
            )}
          />
        </div>
      </Router>
    );
  }
}

export default App;
