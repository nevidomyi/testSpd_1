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
  top: 47%;
  left: 52%;
  transform: translate3d(-50%, -50%, 0);
`;

const HomeLabel: FC = () => {
  return (
    <Container>
      <Label size={"3rem"}>The space is waiting for</Label>
      <Label size={"20rem"}>YOU</Label>
    </Container>
  );
};

export default HomeLabel;
