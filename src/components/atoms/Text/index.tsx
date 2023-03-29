import { FC, ReactNode } from "react";
import styled from "styled-components";

type TextProps = {
  font?: string;
  children: ReactNode;
  size?: string;
  color?: string;
};

export const StyledText = styled.span<TextProps>`
  font-family: ${(props) => (props?.font ? props.font : "Lato")};
  font-size: ${(props) => (props?.size ? props.size : "1.5rem")};
  font-style: normal;
  font-weight: 300;
  text-overflow: inherit;
  color: ${(props) => (props?.color ? props.color : "rgba(85, 107, 132, 1)")};
  display: flex;
  align-items: center;
  text-align: center;
`;

const Text: FC<TextProps> = ({ children, ...props }) => {
  return <StyledText {...props}>{children}</StyledText>;
};

export default Text;
