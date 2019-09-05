import * as React from "react";

export interface TestProps {}

const Test: React.SFC<TestProps> = () => {
  fetch("http://localhost:5000/api/example")
    .then(res => res.json())
    .then(res => console.log(res))
    .catch(err => console.log(err));
  return <h1>I Am the tester, testing this app</h1>;
};

export default Test;
