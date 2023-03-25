import React, { FC } from "react";
import { Button } from "../../atoms/Button";
import styled from "styled-components";
import FavButton from "../../atoms/FavButton";

const StyledBtnGroup = styled.div`
  display: flex;
  flex-direction: row;
`;

const NavBtnGroup: FC = () => {
  return (
    <StyledBtnGroup>
      <FavButton />
      <Button>Sign in</Button>
    </StyledBtnGroup>
  );
};

export default NavBtnGroup;
