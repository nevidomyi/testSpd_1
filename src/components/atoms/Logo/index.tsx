import { FC } from "react";
import { Link, To } from "react-router-dom";
import styled from "styled-components";
import LogoImage from "/src/images/spacex-home.png";

type LogoProps = {
  link: To;
};

const StyledLogo = styled.div`
  height: 42px;
  width: 230px;
  mix-blend-mode: difference;
  background: url(${LogoImage});
  cursor: pointer;
`;

const Logo: FC<LogoProps> = ({ link }) => {
  return (
    <Link to={link}>
      <StyledLogo />
    </Link>
  );
};

export default Logo;
