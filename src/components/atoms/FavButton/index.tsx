import { FC } from "react";
import styled from "styled-components";
import { StyledButton } from "../Button";

type FavButtonProps = {
  checked?: boolean;
};

const StyledFavButton = styled(StyledButton)<FavButtonProps>`
  min-width: 53px;
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

const FavButton: FC<FavButtonProps> = ({ ...props }) => {
  return (
    <StyledFavButton {...props}>
      <img src="/images/icons/Heart.svg" />
    </StyledFavButton>
  );
};

export default FavButton;
