import React from "react";
import PropTypes from "prop-types";
const Error = props => {
  return (
    <div className="error">
      <div className="error__header">
        <span className="error__warning">404.</span> That's an error.
      </div>
      <div className="error__message">{props.message}</div>
    </div>
  );
};

Error.propTypes = {
  message: PropTypes.string
};

export default Error;
