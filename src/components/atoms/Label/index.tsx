import { FC, ReactNode } from "react";
import styled from "styled-components";

type LabelProps = {
  font?: string;
  children: ReactNode;
  size?: string;
  color?: string;
};

export const StyledLabel = styled.span<LabelProps>`
  font-family: ${(props) => (props?.font ? props.font : "Syne")};
  font-size: ${(props) => (props?.size ? props.size : "2rem")};
  font-style: normal;
  font-weight: 800;
  color: ${(props) => (props?.color ? props.color : "white")};
  text-transform: uppercase;
  user-select: none;

  display: flex;
  flex-shrink: 0;
  align-items: center;
  text-align: center;
  text-transform: uppercase;
`;

export const Label: FC<LabelProps> = ({ children, ...props }) => {
  return <StyledLabel {...props}>{children}</StyledLabel>;
};
