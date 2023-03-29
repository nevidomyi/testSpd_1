import { FC } from "react";
import styled from "styled-components";

type CardPictureProps = {
  img?: string;
};

const StyledCardPicture = styled.div`
  width: 100%;
`;

const StyledImg = styled.img`
  box-sizing: content-box;
  width: 100%;
  height: 296px;
  object-fit: cover;
`;

const CardPicture: FC<CardPictureProps> = ({ ...props }) => {
  return (
    <StyledCardPicture>
      <StyledImg src={props.img} />
    </StyledCardPicture>
  );
};

export default CardPicture;
