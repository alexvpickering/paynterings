import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import registerServiceWorker from "./registerServiceWorker";
import { injectGlobal, ThemeProvider } from "styled-components";
import theme from "./utils/theme";

injectGlobal`
  body {
    /* box-sizing: border-box; */
    font-family: Martel,serif;
    margin: 0;
    padding:0;
    font-size: 18px;
    height: 1200px;
    color: #384049;
  }

  /* Debugging */
  .item {
  /* We center the contents of these items. You can also do this with flexbox too! */
  display: grid;
  justify-content: center;
  align-items: center;
  border: 5px solid rgba(0, 0, 0, 0.03);
  border-radius: 3px;
  font-size: 35px;
  background-color: yellow; /* best colour */
}

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

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
registerServiceWorker();
