import React from "react";

const Button = ({ type = "button", children, onClick, className = "" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-4 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;