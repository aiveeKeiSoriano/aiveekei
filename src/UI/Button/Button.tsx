import styled from "styled-components";

import Pattern from "../../assets/pattern.svg";
import Image from "../Image/Image";

const formatCssUrl = (url: string) => {
  return `url("${url}")`;
};

const Wrapper = styled.button`
  border: 4px solid ${(props) => props.theme.colors.border};
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.text};
  font-family: ${(props) => props.theme.fonts.sans};
  padding: 1em 2em;
  font-size: 1em;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  width: fit-content;
  display: flex;
  gap: 10px;
  transition: all 0.5s ease;

  &:hover {
    background: ${formatCssUrl(Pattern)};
    background-size: 6px;
  }

  &:active {
    transform: scale(0.9);
  }
`;

interface ButtonProps {
  children?: React.ReactNode;
  icon?: string;
  iconPosition?: "left" | "right";
  label: string;
  onClick?: () => void;
}

export default function Button({
  children,
  icon,
  iconPosition,
  label,
  onClick,
  ...props
}: ButtonProps) {
  const isLeft = iconPosition === "left" || !iconPosition;
  const isRight = iconPosition === "right";

  return (
    <Wrapper onClick={onClick} {...props}>
      {icon && isLeft && (
        <Image alt={label} height="24px" src={icon} width="24px" />
      )}
      {children || label}
      {icon && isRight && (
        <Image alt={label} height="24px" src={icon} width="24px" />
      )}
    </Wrapper>
  );
}
