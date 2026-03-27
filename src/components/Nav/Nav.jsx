import styled from "styled-components";
import Logo from "../Logo/Logo";
import NavButton from "../NavButton/NavButton";
import NavMobile from "../NavMobile/NavMobile";
import { useState } from "react";
import IconButton from "../IconButton/IconButton";
import MenuIcon from "../../assets/menu.svg";

const Wrapper = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.colors.primary};
  border-bottom: 4px solid ${(props) => props.theme.colors.border};
  display: flex;
  height: 96px;

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    justify-content: space-between;
  }
`;

const Items = styled.div`
  display: flex;

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    display: none;
  }
`;

const Menu = styled(IconButton)`
  align-self: flex-end;
  padding: 20px 20px 16px;

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    display: none;
  }
`;

export default function Nav() {
  const [openNavMobile, setNavMobile] = useState(false);

  return (
    <Wrapper>
      <Logo />
      <Items>
        <NavButton label="Projects" />
      </Items>
      <Menu icon={MenuIcon} onClick={() => setNavMobile(!openNavMobile)} width="60px" />
      <NavMobile
        isOpen={openNavMobile}
        close={() => setNavMobile(!openNavMobile)}
      />
    </Wrapper>
  );
}
