import { NavLink } from "react-router";
import styled, { css } from "styled-components";

import type { NavItemType } from "../Nav/NavRoutes";

const Button = styled.button<{ $isActive?: boolean; $isForMobile?: boolean }>`
  border: none;
  background-color: transparent;
  color: ${(props) => props.theme.colors.text};
  padding: 20px 20px 16px;
  height: 100%;
  cursor: pointer;
  transition:
    background-color 0.5s linear,
    color 0.5s linear;

  font-family: ${(props) => props.theme.fonts.sans};
  font-size: 2.8rem;
  line-height: 1em;
  font-weight: 600;
  text-decoration: none;

  &:hover {
    background-color: ${(props) => props.theme.colors.secondary};
    color: ${(props) => props.theme.colors.textSecondary};
  }

  ${(props) =>
    props.$isActive &&
    css`
      background-color: ${(props) => props.theme.colors.secondary};
      color: ${(props) => props.theme.colors.textSecondary};
    `}

  ${(props) =>
    props.$isForMobile &&
    css`
      width: 100%;
      text-align: left;
      border-bottom: 4px solid ${(props) => props.theme.colors.border};
    `}
`;

interface NavButtonPropType {
  isForMobile?: boolean;
  item: NavItemType;
  onClick?: () => void;
}

export default function NavButton({
  isForMobile,
  item,
  onClick,
}: NavButtonPropType) {
  return (
    <NavLink to={item.url} onClick={onClick}>
      {({ isActive }) => (
        <Button $isActive={isActive} $isForMobile={isForMobile}>
          {item.label}
        </Button>
      )}
    </NavLink>
  );
}
