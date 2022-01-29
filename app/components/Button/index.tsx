import React from "react";

interface ButtonProps {
  type?: "button" | "submit" | "reset";
  children?: React.ReactNode;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({
  type = "button",
  children,
  className = "",
  onClick = (event) => {},
}: ButtonProps) => {
  return (
    <button type={type} className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export { Button };
