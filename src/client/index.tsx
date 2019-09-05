import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { GlobalStyles } from "./src/Theme/GlobalStyles";

import App from "./src/App";

// Load the favicon and the .htaccess file
import "!file-loader?name=[name].[ext]!./templates/favicon.ico";
import "file-loader?name=.htaccess!./.htaccess"; // eslint-disable-line import/extensions

const MOUNT_NODE = document.getElementById("app");

ReactDOM.render(
  <BrowserRouter>
    <GlobalStyles /> <App />
  </BrowserRouter>,
  MOUNT_NODE
);

// Install ServiceWorker and AppCache in the end since
// it's not most important operation and if main code fails,
// we do not want it installed
if (process.env.NODE_ENV === "production") {
  require("offline-plugin/runtime").install(); // eslint-disable-line global-require
}
