import * as React from "react";
import Loadable from "react-loadable";

const Loading = (props: any) => {
  if (props.error) {
    return (
      <div>
        Error! <button onClick={props.retry}>Retry</button>
      </div>
    );
  } else {
    return <div>Loading...</div>;
  }
};

const Test = Loadable({
  loader: () => import("./components/test"),
  loading: Loading
});
export interface AppProps {}

const App: React.SFC<AppProps> = () => {
  return (
    <div>
      <h1>Tester and the testing world</h1>
      <div>
        <Test />
      </div>
    </div>
  );
};

export default App;
