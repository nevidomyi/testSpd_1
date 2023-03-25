import { FC } from "react";
import styled from "styled-components";
import ToursCap from "../../molecules/ToursCap";

const StyledTours = styled.div`
  height: 100%;
  width: 100%;
`;

const Tours: FC = () => {

  return (
    <StyledTours>
      <ToursCap/>
      <div className="cards-container">
        <div className="card"></div>
      </div>
    </StyledTours>
  );
};

export default Tours;