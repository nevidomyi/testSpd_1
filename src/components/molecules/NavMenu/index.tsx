import { FC } from "react";
import styled from "styled-components";
import MenuLink from "../../atoms/MenuLink";

const StyledNavMenu = styled.div`
  display: flex;
  flex-direction: row;
`;

const NavMenu: FC = () => {
  return (
    <StyledNavMenu>
      <MenuLink link="/home">Home</MenuLink>
      <MenuLink link="..">Tours</MenuLink>
      <MenuLink link="..">About</MenuLink>
      <MenuLink link="..">Help</MenuLink>
    </StyledNavMenu>
  );
};

export default NavMenu;
