import { css } from "styled-components";
import theme from "./theme";

const rh5v = css`
  /* Override react-html5video */
  .rh5v-Overlay_component,
  .rh5v-DefaultPlayer_video,
  .rh5v-DefaultPlayer_component {
    border-radius: 6px 6px 0 0;
  }

  .rh5v-DefaultPlayer_component {
    background: transparent;
  }

  .rh5v-Seek_fill {
    background: ${theme.color.pink};
  }
  .rh5v-DefaultPlayer_video {
    display: block;
  }
`;

export default rh5v;
