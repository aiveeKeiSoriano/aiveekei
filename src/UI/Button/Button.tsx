import styled from "styled-components";

const Wrapper = styled.button`
  border: 4px solid ${(props) => props.theme.colors.border};
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.text};
  font-family: ${(props) => props.theme.fonts.sans};
  padding: 1em 2em;
  font-size: 1em;
  line-height: 1;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  width: fit-content;

  &:hover {
    background-color: ${(props) => props.theme.colors.secondary};
    color: ${(props) => props.theme.colors.textSecondary};
  }
`;

interface ButtonProps {
  label: string;
  onClick?: () => void;
}

export default function Button({ label, ...props }: ButtonProps) {
  return <Wrapper {...props}>{label}</Wrapper>;
}
