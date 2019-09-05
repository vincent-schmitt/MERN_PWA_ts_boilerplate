import * as React from "react";

export interface LoadingProps {
  error: boolean;
  retry: () => void;
}

const Loading: React.SFC<LoadingProps> = props => {
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

export default Loading;
