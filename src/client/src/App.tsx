import * as React from "react";
import { Route, Switch } from "react-router-dom";

import LoadableComponent from "./utils/Loadable";

// Providers
import ThemeProvider from "./context/Provider/ThemeProvider/ThemeProvider";

//

import Nav from "./components/Nav";
import Page from "./components/Page";

// Pages
import Home from "./Pages/Home";

export interface AppProps {}

const App: React.SFC<AppProps> = () => {
  return (
    <Page>
      <ThemeProvider>
        <Nav />
      </ThemeProvider>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Page>
  );
};

export default App;
