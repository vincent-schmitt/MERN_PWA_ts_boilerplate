import * as React from "react";
import { Route, Switch } from "react-router-dom";

import LoadableComponent from "./utils/Loadable";

// Providers
import ThemeProvider from "./context/Provider/ThemeProvider";

//

import Nav from "./components/Nav";
import Page from "./components/Page";

// Pages
import Home from "./Pages/Home";
import LanguageContextProvider from "./context/Provider/LanguageProvider";

export interface AppProps {}

const App: React.SFC<AppProps> = () => {
  return (
    <ThemeProvider>
      <LanguageContextProvider>
        <Page>
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </Page>
      </LanguageContextProvider>
    </ThemeProvider>
  );
};

export default App;
