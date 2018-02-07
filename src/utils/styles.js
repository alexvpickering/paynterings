import { css } from "styled-components";

export const theme = {
  color: {
    gray: "rgba(0,0,0,0.1)",
    white: "#fafafa",
    primary: "#ff2c96"
  },

  padding: {
    minSides: "5px",
    minEnds: "50px"
  },

  border: {
    radius: "2px"
  }
};

export const global = css`
  body {
    color: #384049;
    font-size: 18px;
    font-family: Martel, serif;
    font-weight: 100;
  }

  h1,
  h2 {
    font-family: Martel, serif;
    font-weight: 100;
    padding-bottom: 20px;
  }
`;

export const rh5v = css`
  /* Override react-html5video */
  .rh5v-Overlay_component,
  .rh5v-DefaultPlayer_video,
  .rh5v-DefaultPlayer_component {
    border-radius: ${theme.border.radius} ${theme.border.radius} 0 0;
  }

  .rh5v-DefaultPlayer_component {
    background: transparent;
  }

  .rh5v-Seek_fill {
    background: ${theme.color.primary};
  }
  .rh5v-DefaultPlayer_video {
    display: block;
  }
`;

export const mainPadding = css`
  padding-top: ${props => (props.sticky ? props.navHeight + 50 : 50)}px;
  padding-bottom: ${props => props.theme.padding.minEnds};
`;

export const minSides = css`
  padding-right: ${props => props.theme.padding.minSides};
  padding-left: ${props => props.theme.padding.minSides};
`;
