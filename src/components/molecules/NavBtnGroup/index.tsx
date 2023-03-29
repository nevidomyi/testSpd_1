import { FC } from "react";
import { Button } from "../../atoms/Button";
import styled from "styled-components";
import FavButton from "../../atoms/FavButton";
import { useNavigate } from "react-router";

interface NavBtnProps {
  isChecked?: boolean;
}

const StyledBtnGroup = styled.div`
  display: flex;
  flex-direction: row;
`;

const NavBtnGroup: FC<NavBtnProps> = ({ isChecked }) => {
  const navigate = useNavigate();
  const routeChange = () => {
    navigate("/favorites");
  };

  return (
    <StyledBtnGroup>
      <FavButton checked={isChecked} onClick={() => routeChange()} />
      <Button>Sign in</Button>
    </StyledBtnGroup>
  );
};

export default NavBtnGroup;
