// components/ui/Input.jsx
import React from "react";

const Input = ({ className, placeholder, type }) => {
  return <input className={className} type={type} placeholder={placeholder} />;
};

export default Input;
