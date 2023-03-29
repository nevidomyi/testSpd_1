import { FC } from "react";
import styled from "styled-components";
import { StyledButton, ButtonProps } from "../Button";

interface FavButtonProps extends ButtonProps {
  checked?: boolean;
}

const StyledFavButton = styled(StyledButton)<FavButtonProps>`
  min-width: 53px;
  width: 53px;
  padding: 0;

  ${(props) =>
    props?.checked
      ? `
      background: #DD377D
    `
      : `
      background: #ECECEC
    `}
`;

const FavButton: FC<FavButtonProps> = ({ onClick, ...props }) => {
  return (
    <StyledFavButton {...props} onClick={onClick}>
      {props?.checked ? (
        <img src="/images/icons/Heart_white.svg" />
      ) : (
        <img src="/images/icons/Heart.svg" alt="" />
      )}
    </StyledFavButton>
  );
};

export default FavButton;
