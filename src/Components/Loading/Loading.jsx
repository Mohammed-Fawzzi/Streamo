import React from "react";
import LoadingImage from "../../assets/logo.webp";

const Loading = () => {
  return (
    <div className="container-fluid">
      <div className="d-flex justify-content-center align-items-center position-fixed start-0 end-0 top-0 bottom-0 loading">
        <img src={LoadingImage} alt="Loading" />
      </div>
    </div>
  );
};

export default Loading;
