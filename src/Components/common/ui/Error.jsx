import React from "react";

const Error = ({ message = "Something went wrong" }) => {
  return (
    <div className="fw-bold my-5 py-5 text-white text-center">
      Error: {message}
    </div>
  );
};

export default Error;
