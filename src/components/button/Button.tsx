import React from "react";
import * as Styled from "./Button.styled";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Button = ({ children, onClick }: ButtonProps) => {
  return <Styled.Button onClick={onClick}>{children}</Styled.Button>;
};
