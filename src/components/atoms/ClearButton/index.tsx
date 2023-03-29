import { FC } from "react";
import styled from "styled-components";
import { StyledButton, ButtonProps } from "../Button";

const StyledClearButton = styled(StyledButton)`
  font-family: "Lato";
  width: fit-content;

  height: 44px;
  background: inherit;
  text-transform: none;
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  transition: 0.3s ease-in-out;

  &:hover {
    background: #ececec;
  }
`;

const ClearButton: FC<ButtonProps> = ({ ...props }) => {
  return <StyledClearButton {...props}>Clear all</StyledClearButton>;
};

export default ClearButton;
