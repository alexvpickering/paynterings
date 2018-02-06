import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import registerServiceWorker from "./registerServiceWorker";
import { injectGlobal, ThemeProvider } from "styled-components";
import theme from "./utils/theme";
import rh5v from "./utils/rh5v";

injectGlobal`
  body {
    box-sizing: border-box;
    font-family: Martel,serif;
    margin: 0;
    font-size: 18px;
    color: #384049;
  }

  /* Override react-html5video */
  ${rh5v}
`;

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
registerServiceWorker();
