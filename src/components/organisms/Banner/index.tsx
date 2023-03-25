import { FC } from "react";
import Carousel from "../../../utils/Carousel";
import HomeLabel from "../../molecules/HomeLabel";
import styled from "styled-components";

const StyledBanner = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
`;

const Banner: FC = () => {
  const images = [
    "/images/astronaut-b.png",
    "/images/spaceship-b.png",
    "/images/earth-b.png",
  ];

  return (
    <StyledBanner>
      <HomeLabel/>
      <Carousel images={images} autoplay={true} timeout={10000}/>
    </StyledBanner>
  );
};

export default Banner;
