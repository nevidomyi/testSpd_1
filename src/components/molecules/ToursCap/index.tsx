import { FC } from "react";
import styled from "styled-components";
import { Label } from "../../atoms/Label";
import NextButton from "../../atoms/NextButton";
import PrevButton from "../../atoms/PrevButton";

const StyledToursCap = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-flow: row;
  justify-content: space-between;
`;

const StyledArrows = styled.div`
  display: flex;
`;

const ToursCap: FC = () => {
  return (
    <StyledToursCap>
      <Label size={"2rem"} color={"black"}>
        Popular tours
      </Label>
      <StyledArrows>
        <PrevButton />
        <NextButton />
      </StyledArrows>
    </StyledToursCap>
  );
};

export default ToursCap;
