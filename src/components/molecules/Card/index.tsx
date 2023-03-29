import { FC } from "react";
import styled from "styled-components";
import CardPicture from "../../atoms/CardPicture";
import { Button } from "../../atoms/Button";
import FavButton from "../../atoms/FavButton";
import DeleteButton from "../../atoms/DeleteButton";
import Text from "../../atoms/Text";
import Title from "../../atoms/Title";
import { useRocket } from "../../../api/API";

interface CardProps {
  id: string;
  cardsPerPage: number | 3;
  index: number;
  isDelete?: boolean;
  FavHandler?: (e: any) => void;
}

const StyledCard = styled.div`
  flex-shrink: 0;
  width: calc(
    100% / ${(props: { cardsPerPage: number }) => props.cardsPerPage} - 18px
  );
  height: 572px;
  border: 1px solid #d3eaff;
  margin: 0 12px;
`;

const StyledTextContainer = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: baseline;
  align-items: center;
  height: 199px;
  padding: 32px 10px 20px;
  overflow: hidden;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 60px;
    background: linear-gradient(to bottom, transparent, white);
  }
`;

const StyledBtnCard = styled.div`
  display: flex;
  padding: 0 32px 24px;
`;

const images = [
  "/images/earth1.png",
  "/images/earth2.png",
  "/images/earth3.png",
];

const Card: FC<CardProps> = ({ id, cardsPerPage, isDelete, index, FavHandler }) => {
  const rocket = useRocket(id);
  return (
    <StyledCard id={`${id}`} cardsPerPage={cardsPerPage}>
      <CardPicture img={images[index % images.length]}></CardPicture>
      <StyledTextContainer>
        <Title>{rocket?.name}</Title>
        <Text>{rocket?.description}</Text>
      </StyledTextContainer>
      <StyledBtnCard>
        <Button>Buy</Button>
        {isDelete ? (
          <DeleteButton onClick={FavHandler} />
        ) : (
          <FavButton onClick={FavHandler} />
        )}
      </StyledBtnCard>
    </StyledCard>
  );
};

export default Card;
