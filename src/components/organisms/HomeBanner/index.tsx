import { FC } from "react";
import Carousel from "../../../utils/Carousel";
import HomeLabel from "../../molecules/HomeLabel";
import styled from "styled-components";
import LinkToAnchor from "../../molecules/LinkToAnchor";

const StyledHomeBanner = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
`;

const HomeBanner: FC = () => {
  const images = [
    "/images/astronaut-b.png",
    "/images/spaceship-b.png",
    "/images/earth-b.png",
  ];

  return (
    <StyledHomeBanner>
      <HomeLabel />
      <Carousel images={images} autoplay={true} timeout={10000} />
      <LinkToAnchor link={"#tours"} />
    </StyledHomeBanner>
  );
};

export default HomeBanner;
