import { FC, useState, useEffect } from "react";
import styled from "styled-components";
import { Label } from "../../atoms/Label";
import ToursCap from "../../molecules/ToursCap";
import Card from "../../molecules/Card";
import CardSlider from "../../../utils/CardSlider";
import NextButton from "../../atoms/NextButton";
import PrevButton from "../../atoms/PrevButton";
import { useRockets } from "../../../api/API";
import { favListState } from "../../../states/favList";
import { useRecoilState } from "recoil";
import { useFavList } from "../../../hooks/useFavList";
import { Rocket } from "../../../api/API";

interface ToursProps {
  cardsPerPage: number | 3;
}

const StyledTours = styled.div`
  height: 100%;
  margin: 99px 80px 160px;
  overflow: hidden;
`;

const StyledCardsContainer = styled.div<{ transformValue: string }>`
  display: flex;
  box-sizing: content-box;

  padding: 0 10px;
  opacity: 1;
  transition: transform 0.3s ease-in-out;
  transform: ${({ transformValue }) => transformValue};
`;

const images = [
  "/images/earth1.png",
  "/images/earth2.png",
  "/images/earth3.png",
];

const Tours: FC<ToursProps> = ({ cardsPerPage }) => {
  const [favList, setFavList] = useRecoilState(favListState);
  const { handleAdd } = useFavList();
  const { currentCard, handleNext, handlePrev } = CardSlider();
  const { data } = useRockets();

  const transformValue = `translateX(-${currentCard * (100 / cardsPerPage)}%)`;

  if (!data?.rockets) {
    return <Label>Loading...</Label>;
  }

  return (
    <StyledTours id="tours">
      <ToursCap>
        <PrevButton
          onClick={() => handlePrev(data?.rockets.length, cardsPerPage)}
        />
        <NextButton
          onClick={() => handleNext(data?.rockets.length, cardsPerPage)}
        />
      </ToursCap>
      <StyledCardsContainer transformValue={transformValue}>
        {data.rockets.map((rocket: Rocket, index: number) => {
          return (
            <Card
              id={rocket.id}
              key={index}
              index={index}
              cardsPerPage={cardsPerPage}
              FavHandler={() => {
                handleAdd(rocket.id);
              }}
            />
          );
        })}
      </StyledCardsContainer>
    </StyledTours>
  );
};

export default Tours;
