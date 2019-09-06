import * as React from "react";

import { Container } from "../../Theme/custom/Container";

export interface HomeProps {}

const Home: React.SFC<HomeProps> = () => {
  return (
    <Container style={{ textAlign: "center" }}>This is the Home Page</Container>
  );
};

export default Home;
