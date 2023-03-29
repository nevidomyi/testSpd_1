import { FC } from "react";
import styled from "styled-components";
import { StyledButton, ButtonProps } from "../Button";

const StyledPrevButton = styled(StyledButton)`
  min-width: 44px;
  width: 44px;
  height: 44px;
  padding: 0;
  background: #ececec;
`;

const PrevButton: FC<ButtonProps> = ({ ...props }) => {
  return (
    <StyledPrevButton {...props}>
      <img src="/images/icons/Arrow left.svg" />
    </StyledPrevButton>
  );
};

export default PrevButton;
