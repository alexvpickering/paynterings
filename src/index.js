import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import registerServiceWorker from "./registerServiceWorker";
import { Provider } from "react-redux";
import store from "./store.js";
import { BrowserRouter as Router } from "react-router-dom";

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

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Router basename={process.env.PUBLIC_URL}>
        <App />
      </Router>
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
