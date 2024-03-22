import React from "react";

export const Input = ({ className, ...rest }) => {
  return <input className={`border rounded p-2 ${className}`} {...rest} />;
};

