import React from "react";
import Navbar from "../../components/Navbar";
import Main from "./Main";
import HeroImage from "./HeroImage";
import PostPreview from "../../components/PostPreview";
import posts from "../../data/posts";

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      sticky: false,
      navHeight: 0
    };

    this.lastScrollPosition = 0;
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
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

  render() {
    return (
      <div>
        <HeroImage navHeight={this.state.navHeight} />
        <Navbar getNavHeight={this.getNavHeight} sticky={this.state.sticky} />
        <Main sticky={this.state.sticky} navHeight={this.state.navHeight}>
          {posts.map((post, i) => (
            <PostPreview
              video={post.video}
              key={i}
              title={post.title}
              date={post.date}
            />
          ))}
        </Main>
      </div>
    );
  }
}

export default Home;
