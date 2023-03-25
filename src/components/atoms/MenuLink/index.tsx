import { FC, ReactNode } from "react";
import styled from "styled-components";
import { Link, To } from "react-router-dom";

type MenuLinkProps = {
  children: ReactNode;
  link: To;
};

const StyledMenuLink = styled.li`
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.25rem;
  display: flex;
  align-items: center;
  text-align: center;
  text-transform: uppercase;
  color: #ffffff;
  margin: 0 1rem;
  position: relative;
  padding: 4px 0;
  user-select: none;

  &::before {
    content: "";
    width: 100%;
    height: 1px;
    position: absolute;
    left: 0;
    bottom: 0;
    background: #fff;
    transition: 0.5s transform ease;
    transform: scaleX(0);
    transform-origin: 0 100%;
  }

  &:hover {
    &::before {
      transform: scaleX(1);
    }
  }
`;

const MenuLink: FC<MenuLinkProps> = ({ children, link }) => {
  return (
    <StyledMenuLink>
      <Link to={link}>{children}</Link>
    </StyledMenuLink>
  );
};

export default MenuLink;
