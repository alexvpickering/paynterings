import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Navbar from "../Navbar/Navbar";
import PostGrid from "./PostGrid";
import HeroImage from "./HeroImage";
import PostPreview from "./PostPreview";

const HomePage = ({ posts, sticky }) => {
  return (
    <div>
      <HeroImage />
      <Navbar sticky={sticky} />
      <PostGrid sticky={sticky}>
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
  posts: PropTypes.array.isRequired,
  sticky: PropTypes.bool.isRequired
};

// connect to store
export default connect(
  state => ({
    posts: state.posts,
    sticky: state.sticky
  }),
  null
)(HomePage);
