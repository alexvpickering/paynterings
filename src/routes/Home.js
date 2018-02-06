import React from "react";
import { Navbar } from "../components/Navbar";
import { Main, HeroImage, Hr } from "../components/styled";
import PostPreview from "../components/PostPreview";

import FionaCute from "../assets/File 2017-11-26, 7 46 43 PM.mov";
import FionaChristmas from "../assets/File 2018-01-12, 6 15 20 PM.mov";

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      sticky: false,
      navHeight: 0
    };

    this.lastScrollPosition = 0;
  }

  handleScroll = e => {
    // sticky
    const sticky =
      window.pageYOffset > window.innerHeight - this.state.navHeight;
    if (sticky !== this.state.sticky) this.setState({ sticky });
  };

  getNavHeight = el => {
    this.setState({
      navHeight: el.offsetHeight
    });
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUpdate() {
    console.log(this.state);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  render() {
    return (
      <div>
        <HeroImage navHeight={this.state.navHeight} />
        <Navbar getNavHeight={this.getNavHeight} sticky={this.state.sticky} />
        sticky={this.state.sticky}
        navHeight={this.state.navHeight}
        >
        <Main>
          {/* <div className="item">1</div>
          <div className="item">2</div>
          <div className="item">3</div>
          <div className="item">4</div>
          <div className="item">5</div>
          <div className="item">6</div>
          <div className="item">7</div>
          <div className="item">8</div>
          <div className="item">9</div>
        <div className="item">10</div> */}

          <PostPreview
            video={FionaCute}
            title="Fiona is cute in a dress!"
            date="Feb 2018"
          />
          <PostPreview
            video={FionaChristmas}
            title="Our Little Who"
            date="Dec 2017"
          />
          <PostPreview
            video={FionaCute}
            title="Fiona is cute in a dress!"
            date="Feb 2018"
          />
          <PostPreview
            video={FionaChristmas}
            title="Our Little Who"
            date="Dec 2017"
          />
          <PostPreview
            video={FionaCute}
            title="Fiona is cute in a dress!"
            date="Feb 2018"
          />
          <PostPreview
            video={FionaChristmas}
            title="Our Little Who"
            date="Dec 2017"
          />
        </Main>
      </div>
    );
  }
}

export default Home;
