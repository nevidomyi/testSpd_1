import { FC } from "react";
import styled from "styled-components";

type BackgroundProps = {
  img?: string;
};

const StyledBackground = styled.div`
  width: 100%;
`;

const StyledImg = styled.img`
  width: 100%;
  object-fit: cover;
  opacity: 0.50;
`;

const Background: FC<BackgroundProps> = ({ ...props }) => {
  return (
    <StyledBackground>
      <StyledImg src={props.img} />
    </StyledBackground>
  );
};

export default Background;
