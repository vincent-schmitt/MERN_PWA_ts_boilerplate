import * as React from "react";
import { Route, Switch } from "react-router-dom";

import LoadableComponent from "./utils/Loadable";

// Providers
import NavThemeProvider from "./context/Provider/ThemeProvider/NavThemeProvider";

//

import Nav from "./components/Nav";
import Page from "./components/Page";

// Pages
import Home from "./Pages/Home";

export interface AppProps {}

const App: React.SFC<AppProps> = () => {
  return (
    <Page>
      <NavThemeProvider>
        <Nav />
      </NavThemeProvider>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Page>
  );
};

export default App;
