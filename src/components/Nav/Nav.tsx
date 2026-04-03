import { useState } from "react";
import styled from "styled-components";

import MenuIcon from "../../assets/menu.svg";
import IconButton from "../../UI/IconButton/IconButton";
import Logo from "../Logo/Logo";
import NavButton from "../NavButton/NavButton";
import NavDrawer from "../NavDrawer/NavDrawer";

const Wrapper = styled.header`
  width: 100%;
  background-color: ${(props) => props.theme.colors.primary};
  border-bottom: 4px solid ${(props) => props.theme.colors.border};
  display: flex;
  height: 96px;
  justify-content: space-between;

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    justify-content: flex-start;
  }
`;

const Items = styled.nav`
  display: none;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: flex;
  }
`;

const Menu = styled(IconButton)`
  align-self: flex-end;
  padding: 20px 20px 16px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;

const NAV_ITEMS = ["Projects"];

export default function Nav() {
  const [isDrawerOpen, setDrawerOpen] = useState<boolean>(false);

  return (
    <Wrapper>
      <Logo />
      <Items>
        {NAV_ITEMS.map((item) => (
          <NavButton key={item} label={item} />
        ))}
      </Items>
      <Menu
        alt="menu"
        height="60px"
        icon={MenuIcon}
        onClick={() => setDrawerOpen(!isDrawerOpen)}
        width="60px"
      />
      <NavDrawer
        close={() => setDrawerOpen(!isDrawerOpen)}
        isOpen={isDrawerOpen}
        items={NAV_ITEMS}
      />
    </Wrapper>
  );
}
