import React, { useEffect, useState } from "react";
import styled from "styled-components";

type CarouselProps = {
  images: string[];
  autoplay?: boolean | false;
  timeout?: number | 5000;
};

const Carousel: React.FC<CarouselProps> = ({ images, autoplay, timeout }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const handleNext = () => {
    setCurrentImage((currentImage + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentImage((currentImage - 1 + images.length) % images.length);
  };

  const handleDotClick = (index: number) => {
    setCurrentImage(index);
  };

  useEffect(() => {
    if (!autoplay) return;
    const slideInterval = setInterval(handleNext, timeout);
    return () => clearInterval(slideInterval);
  }, [currentImage]);

  return (
    <CarouselContainer>
      {images.map((image, index) => (
        <CarouselImage
          key={index}
          src={image}
          alt={`Carousel Image ${index + 1}`}
          active={index === currentImage}
        />
      ))}
      <Navigation>
        {/* <NavigationButton onClick={handlePrev}>Previous</NavigationButton> */}
        <DotsContainer>
          {images.map((_, index) => (
            <Dot
              key={index}
              active={currentImage === index}
              onClick={() => handleDotClick(index)}
            />
          ))}
        </DotsContainer>
        {/* <NavigationButton onClick={handleNext}>Next</NavigationButton> */}
      </Navigation>
    </CarouselContainer>
  );
};

export default Carousel;

const CarouselContainer = styled.div`
  position: relative;
  height: 100vh;
`;

const CarouselImage = styled.img<{ active: boolean }>`
  width: 100%;
  height: 100vh;
  position: absolute;
  object-fit: cover;
  pointer-events: none;
  opacity: ${({ active }) => (active ? 1 : 0)};
  transition: opacity 0.5s ease-in-out;
`;

const Navigation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavigationButton = styled.button`
  background-color: white;
  border: 1px solid black;
  padding: 10px;
  cursor: pointer;
`;

const DotsContainer = styled.div`
  position: absolute;
  transform: translate3d(-50%, -50%, 0);
  z-index: 3;
  top: 50%;
  left: 50%;
  display: flex;
`;

const Dot = styled.span<{ active: boolean }>`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: ${({ active }) => (active ? "white" : "transparent")};
  margin-right: 20px;
  cursor: pointer;
  position: relative;

  &:after {
    content: " ";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
    width: 24px;
    height: 24px;
    border-radius: 100%;
    border: 1px solid white;
  }
`;
