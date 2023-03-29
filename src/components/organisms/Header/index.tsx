import { FC } from "react";
import styled from "styled-components";
import Logo from "../../atoms/Logo";
import NavBtnGroup from "../../molecules/NavBtnGroup";
import NavMenu from "../../molecules/NavMenu";

type HeaderProps = {
  isChecked?: boolean;
};

const StyledHeader = styled.div`
  background: rgba(30, 30, 30, 0.48);
  height: 5rem;
  z-index: 2;
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 5rem;
  padding-right: 5rem;
`;

const Header: FC<HeaderProps> = ({ isChecked }) => {
  return (
    <StyledHeader>
      <Logo link={"/"} />
      <NavMenu />
      <NavBtnGroup isChecked={isChecked} />
    </StyledHeader>
  );
};

export default Header;
