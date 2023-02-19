import React, { ButtonHTMLAttributes } from "react";

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: "primary" | "secondary" | "tertiary";
}

const CustomButton: React.FC<CustomButtonProps> = ({
  color = "primary",
  className = "",
  ...props
}) => {
  const classNames = `custom-button custom-button--${color} ${className}`;

  return <button {...props} className={classNames} />;
};

export default CustomButton;
