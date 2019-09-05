import * as React from "react";

import LoadableComponent from "./utils/Loadable";

const Test = LoadableComponent(() => import("./components/test"));

export interface AppProps {}

const App: React.SFC<AppProps> = () => {
  const message = "hello";
  const [show, setShow] = React.useState(false);
  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    fetch("http://localhost:5000/api/example")
      .then(res => res.json())
      .then(res => {
        setShow(!show);
        console.log(res);
      })
      .catch(err => console.log(err));
  };
  return (
    <div>
      <h1>Tester</h1>
      <div>
        <button onClick={onClick}>Toggle</button>
      </div>
      {show && <h1>{message}</h1>}
    </div>
  );
};

export default App;
