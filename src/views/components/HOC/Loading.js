import React from "react";

import "./loading.scss";

const LoadingHOC = (WrappedComponent) => {
  const HOC = (props) => {
    const [isLoading, setIsLoading] = React.useState(false);

    return (
      <div className="loading">
        {isLoading && <h1 className="loading__text">LOADING...</h1>}
        <WrappedComponent
          {...props}
          isLoading={isLoading}
          setIsLoading={(value) => setIsLoading(value)}
        />
      </div>
    );
  };

  return HOC;
};

export default LoadingHOC;
