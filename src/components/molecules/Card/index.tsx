import {FC} from "react";
import styled from "styled-components";

const StyledCard = styled.div`
  width: 411px;
  height: 572px;
`

const Card: FC = () => {
  return (
    <StyledCard>
      <div className="picture"></div>
      <div className="text-container"></div>
      <div className="btn-card">
        
      </div>
    </StyledCard>
  )
}

export default Card;