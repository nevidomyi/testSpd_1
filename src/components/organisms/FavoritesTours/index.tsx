import { FC, useState, useEffect } from "react";
import styled from "styled-components";
import { Label } from "../../atoms/Label";
import ClearButton from "../../atoms/ClearButton";
import Card from "../../molecules/Card";
import { useFavList } from "../../../hooks/useFavList";
import { FavouriteTour } from "../../../hooks/useFavList";

interface ToursProps {
  cardsPerPage: number | 3;
}

const StyledTours = styled.div`
  height: 100%;
  margin: 99px 80px 160px;
  display: flex;
  flex-flow: column;
  align-items: flex-end;
`;

const StyledCardsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  row-gap: 16px;
  padding: 0 10px;
`;

const FavoritesTours: FC<ToursProps> = ({ cardsPerPage }) => {
  const { handleRemove, handleRemoveAll, favList } = useFavList();

  return (
    <StyledTours id="tours">
      <ClearButton
        onClick={() => {
          handleRemoveAll();
        }}
      />
      <StyledCardsContainer>
        {Array.isArray(favList) ? (
          favList.map((rocketId: FavouriteTour, index: number) => {
            return (
              <Card
                id={rocketId}
                key={index}
                index={index}
                cardsPerPage={cardsPerPage}
                isDelete={true}
                FavHandler={() => {
                  handleRemove(rocketId);
                }}
              />
            );
          })
        ) : (
          <Label>Loading...</Label>
        )}
      </StyledCardsContainer>
    </StyledTours>
  );
};

export default FavoritesTours;
