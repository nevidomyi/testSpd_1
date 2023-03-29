import { FC, ReactElement } from "react";
import styled from "styled-components";
import { Label } from "../../atoms/Label";

interface ToursCapProps {
  cardsPerPage?: number;
  cardsLenght?: number;
  children?: ReactElement | ReactElement[];
}

const StyledToursCap = styled.div`
  height: 100%;
  width: 100%;
  padding-bottom: 43px;
  display: flex;
  flex-flow: row;
  justify-content: space-between;
`;

const StyledArrows = styled.div`
  display: flex;
`;

const ToursCap: FC<ToursCapProps> = ({ children }) => {
  return (
    <StyledToursCap>
      <Label size={"2rem"} color={"black"}>
        Popular tours
      </Label>
      <StyledArrows>{children}</StyledArrows>
    </StyledToursCap>
  );
};

export default ToursCap;
