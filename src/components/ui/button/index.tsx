import React from "react";

const Button = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ children, onClick, className = "", ...rest }, ref) => {
  return (
    <button
      ref={ref} // Forward the ref here
      className={`bg-[#1d4ed8] rounded-md py-2 text-white hover:bg-white hover:text-[#1d4ed8] font-semibold ${className}`}
      onClick={onClick}
      {...rest} // Spread any additional props (e.g., type, disabled)
    >
      {children}
    </button>
  );
});

Button.displayName = "Button"; // Add displayName for better debugging

export default Button;
