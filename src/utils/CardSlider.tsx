import { useState } from "react";

const CardSlider = () => {
  const [currentCard, setCurrentCard] = useState(0);

  const handleNext = (cardsLenght: number, cardsPerPage: number) => {
    setCurrentCard((currentCard + 1) % (cardsLenght - cardsPerPage + 1));
  };

  const handlePrev = (cardsLenght: number, cardsPerPage: number) => {
    setCurrentCard(
      currentCard === 0 ? cardsLenght - cardsPerPage : currentCard - 1
    );
  };

  return {
    handleNext,
    handlePrev,
    currentCard,
  };
};

export default CardSlider;
