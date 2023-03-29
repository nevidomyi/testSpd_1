import { FC } from "react";
import styled from "styled-components";
import { StyledButton, ButtonProps } from "../Button";

const StyledNextButton = styled(StyledButton)`
  min-width: 44px;
  width: 44px;
  height: 44px;
  padding: 0;
  background: #ECECEC;
`;

const NextButton: FC<ButtonProps> = ({ ...props }) => {
  return (
    <StyledNextButton {...props}>
      <img src="/images/icons/Arrow right.svg" />
    </StyledNextButton>
  );
};

export default NextButton;
