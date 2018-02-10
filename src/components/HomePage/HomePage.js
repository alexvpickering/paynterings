import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { setNavHeight } from "../../actions/actionCreators";

import Navbar from "../Navbar";
import PostGrid from "./PostGrid";
import HeroImage from "./HeroImage";
import PostPreview from "./PostPreview";

const HomePage = ({ posts, sticky, navHeight, setNavHeight }) => {
  return (
    <div>
      <HeroImage navHeight={navHeight} />
      <Navbar sticky={sticky} setNavHeight={setNavHeight} />
      <PostGrid sticky={sticky} navHeight={navHeight}>
        {posts.map((post, i) => (
          <PostPreview
            video={post.video}
            key={i}
            title={post.title}
            date={post.date}
          />
        ))}
      </PostGrid>
    </div>
  );
};

HomePage.propTypes = {
  posts: PropTypes.array.isRequired
};

// connect to store
export default connect(
  state => ({
    posts: state.posts,
    sticky: state.sticky,
    navHeight: state.navHeight
  }),
  dispatch => ({
    setNavHeight: navHeight => {
      dispatch(setNavHeight(navHeight));
    }
  })
)(HomePage);
