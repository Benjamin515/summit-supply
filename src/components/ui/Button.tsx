"use client";

import React from "react";
import "../../styles/ui/Button.css";

// Define the button props interface
type ButtonVariant = "primary" | "secondary" | "danger"; // Extend as needed

interface ButtonProps {
  label: string; // The text to display on the button
  onClick?: () => void; // The function to handle the button click event
  isDisabled?: boolean; // Optional: whether the button is disabled
  className?: string; // Optional: additional CSS classes for styling
  type?: "button" | "submit" | "reset"; // Optional: type of the button (default is 'button')
  icon?: React.ReactNode;
}

// Button component using the defined interface
function Button({
  label,
  onClick,
  isDisabled = false,
  className = "",
  type = "button",
  icon,
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`button${className ? ` ${className}` : ""}`} // Apply BEM or other class names
      onClick={onClick}
      disabled={isDisabled}
    >
      <div className="button__content">
        {icon && <span className="button__icon">{icon}</span>}{" "}
        {/* Render the icon if passed */}
        <p className="button__label">{label}</p> {/* Text label */}
      </div>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
}

export default Button;
