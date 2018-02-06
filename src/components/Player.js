import React from "react";
import { DefaultPlayer as Video } from "react-html5video";
import "react-html5video/dist/styles.css";

const sintelTrailer = "File 2017-11-26, 7 46 43 PM.mov";

class Player extends React.Component {
  render() {
    return (
      <Video loop>
        <source src={sintelTrailer} />
      </Video>
    );
  }
}

export default Player;
