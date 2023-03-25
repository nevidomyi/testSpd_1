import { FC, ReactNode } from "react";
import styled from "styled-components";

type ButtonProps = {
  children?: ReactNode;
};

export const StyledButton = styled.div<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: "center";
  width: 100%;
  min-width: max-content;
  height: 3.25rem;
  margin: 0.5rem;
  cursor: pointer;
  transition: 0.1s;
  user-select: none;
  padding: 0 2rem;
  background-color: #d3eaff;

  /* Font */
  font-family: "Syne";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;

  /* identical to box height */
  text-transform: uppercase;

  color: #000000;

  &:hover {
    box-shadow: 0 0 3px rgba(33, 33, 33, 0.2);
  }

  &:active {
    transform: scale(0.98);
    background: #c5e2fc;
    box-shadow: none;
  }
`;

export const Button: FC<ButtonProps> = ({ children }) => {
  return <StyledButton>{children}</StyledButton>;
};
