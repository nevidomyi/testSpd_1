import { FC } from "react";
import styled from "styled-components";
import { Label } from "../../atoms/Label";

const Container = styled.div`
  display: flex;
  flex-flow: column;
  justify-items: center;
  align-items: center;
  text-align: center;
  text-transform: uppercase;
  position: absolute;
  z-index: 2;
  top: 55%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
`;

const FavLabel: FC = () => {
  return (
    <Container>
      <Label size={"3rem"}>Favorites</Label>
    </Container>
  );
};

export default FavLabel;
