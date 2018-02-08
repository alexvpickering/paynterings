import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addPost } from "../../actions/actionCreators";

import Navbar from "../Navbar";
import PostGrid from "./PostGrid";
import HeroImage from "./HeroImage";
import PostPreview from "./PostPreview";

const HomePage = ({ sticky, navHeight, getNavHeight, posts }) => {
  console.log("rendering");
  return (
    <div>
      <HeroImage navHeight={navHeight} />
      <Navbar getNavHeight={getNavHeight} sticky={sticky} />
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
  sticky: PropTypes.bool.isRequired,
  navHeight: PropTypes.number.isRequired,
  getNavHeight: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired
};

// connect to store
export default connect(state => ({ posts: state.posts }), dispatch => ({}))(
  HomePage
);
