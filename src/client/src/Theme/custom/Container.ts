import styled from "styled-components";

import { small, medium, large, xxl } from "./media";

export const Container = styled.main`
  min-height: 90vh;

  margin: 0 auto;
  ${small} {
    width: 95vw;
  }
  ${medium} {
    width: 90vw;
  }
  ${large} {
    width: 85vw;
  }
  ${xxl} {
    width: 80vw;
  }
`;
