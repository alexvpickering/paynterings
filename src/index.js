import React from "react";
import { render } from "react-dom";
import App from "./App.js";
import registerServiceWorker from "./registerServiceWorker";
import { Provider } from "react-redux";
import store from "./store.js";
import { push } from "react-router-redux";

import { injectGlobal, ThemeProvider } from "styled-components";
import styledNormalize from "styled-normalize";
import { theme, rh5v, global } from "./styles";

injectGlobal`
  /* Normalize styles */
  ${styledNormalize}
  /* Global styles */
  ${global}
  /* Override react-html5video */
  ${rh5v}
`;

render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
