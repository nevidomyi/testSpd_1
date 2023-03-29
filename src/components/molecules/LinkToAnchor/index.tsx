import { FC, ReactNode } from "react";
import styled from "styled-components";
import { Link, To } from "react-router-dom";
import Text, { StyledText } from "../../atoms/Text";
import Icon from "../../atoms/Icon";

interface LinkToAnchorProps {
  link: string;
}

const StyledLinkToAnchor = styled.a`
  display: flex;
  align-items: center;
  text-align: center;
  text-decoration: none;

  position: absolute;
  bottom: 33px;
  left: 50%;
  transform: translateX(-50%);

  padding: 4px 0;
  user-select: none;
`;

const StyledTextAnchor = styled(StyledText)`
  font-weight: 400;
  flex-shrink: 0;
  /* -webkit-text-stroke: 0.2px black; */
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const LinkToAnchor: FC<LinkToAnchorProps> = ({ link }) => {
  return (
    <StyledLinkToAnchor href={link}>
      <StyledTextAnchor size="2rem" color="white">
        Explore tours
      </StyledTextAnchor>
      <Icon img="/images/icons/Arrow - Down.svg"></Icon>
    </StyledLinkToAnchor>
  );
};

export default LinkToAnchor;
