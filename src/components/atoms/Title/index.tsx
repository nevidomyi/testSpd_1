import { FC, ReactNode } from "react";
import styled from "styled-components";

type TitleProps = {
  font?: string;
  children: ReactNode;
  size?: string;
  color?: string;
};

const StyledTitle = styled.span<TitleProps>`
  font-family: ${(props) => (props?.font ? props.font : "Syne")};
  font-size: ${(props) => (props?.size ? props.size : "1.5rem")};
  font-style: normal;
  font-weight: 700;
  color: ${(props) => (props?.color ? props.color : "rgba(30, 30, 30, 1)")};
  margin-bottom: 16px;
  text-overflow: inherit;

  display: flex;
  align-items: center;
  text-align: center;
  text-transform: uppercase;
`;

const Title: FC<TitleProps> = ({ children, ...props }) => {
  return <StyledTitle {...props}>{children}</StyledTitle>;
};

export default Title;
