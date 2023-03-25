import { FC } from "react";
import styled from "styled-components";
import Logo from "../../atoms/Logo";
import NavBtnGroup from "../../molecules/NavBtnGroup";
import NavMenu from "../../molecules/NavMenu";

const StyledHeader = styled.div`
  background: rgba(30, 30, 30, 0.48);
  height: 5rem;
  top: 0;
  right: 0;
  z-index: 2;
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 5rem;
  padding-right: 5rem;
`;

const Header: FC = () => {
  return (
    <StyledHeader>
      <Logo link={".."} />
      <NavMenu />
      <NavBtnGroup />
    </StyledHeader>
  );
};

export default Header;
