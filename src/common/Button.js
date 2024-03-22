import React from "react";

export const Button = (props) => {
  const { children, onClick, className, type = "button", ...rest } = props;
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-4 py-2 rounded text-white bg-blue-500 hover:bg-blue-700 transition-colors ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};
