import React, { forwardRef } from "react";

const Input = forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ type = "text", placeholder, className = "", ...props }, ref) => {
    return (
      <input
        type={type}
        placeholder={placeholder}
        ref={ref} // Forward the ref here
        className={`rounded-md py-2 px-2 shadow-md hover:bg-lightest ${className}`}
        {...props} // Spread other props like `onChange`, `value`, etc.
      />
    );
  }
);

Input.displayName = "Input"; // For better debugging

export default Input;
