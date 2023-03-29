import { FC } from "react";
import styled from "styled-components";
import { StyledButton, ButtonProps } from "../Button";

const StyledDeleteButton = styled(StyledButton)`
  min-width: 53px;
  width: 53px;
  height: 53px;
  padding: 0;
  background: #ECECEC;
`;

const DeleteButton: FC<ButtonProps> = ({ ...props }) => {
  return (
    <StyledDeleteButton {...props}>
      <img src="/images/icons/Delete.svg" />
    </StyledDeleteButton>
  );
};

export default DeleteButton;
