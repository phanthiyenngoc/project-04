import React, { Children } from "react";
import "./Button.css";

const Button = (props) => {
  const { children } = props;
  return (
    <button className="button" {...props}>
      {children}
    </button>
  );
};

export default Button;
