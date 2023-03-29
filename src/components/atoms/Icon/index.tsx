import { FC } from "react";
import styled from "styled-components";

type CardPictureProps = {
  img: string;
  width?: string;
  height?: string;
};

const StyledIconContainer = styled.div`
  width: 100%;
`;

const StyledIcon = styled.img`
  box-sizing: content-box;
  width: ${(props) => (props?.width ? props.width : "40px")};
  height: ${(props) => (props?.height ? props.height : "40px")};
  object-fit: cover;
`;

const Icon: FC<CardPictureProps> = ({ img, ...props }) => {
  return (
    <StyledIconContainer>
      <StyledIcon src={img} {...props} />
    </StyledIconContainer>
  );
};

export default Icon;
