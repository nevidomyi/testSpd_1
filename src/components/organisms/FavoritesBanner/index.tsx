import { FC } from "react";
import styled from "styled-components";
import FavLabel from "../../molecules/FavLabel";
import Background from "../../atoms/Background";

const StyledFavBanner = styled.div`
  height: 440px;
  width: 100%;
  overflow: hidden;
  position: relative;
  background: #1E1E1E;
`;

const FavBanner: FC = () => {
  return (
    <StyledFavBanner>
      <FavLabel />
      <Background img="/images/astronaut-b.png" />
    </StyledFavBanner>
  );
};

export default FavBanner;
