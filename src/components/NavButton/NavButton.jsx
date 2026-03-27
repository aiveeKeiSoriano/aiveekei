import styled, { css } from "styled-components";


const Button = styled.button`
    padding: 0.5em 1em;
    border: none;
    background-color: transparent;
    color: ${props => props.theme.colors.text};
    font-family: ${props => props.theme.fonts.sans};
    padding: 20px 20px 16px;
    font-size: 2.8rem;
    line-height: 1;
    font-weight: 600;
    text-decoration: none;
    cursor: pointer;

    &:hover {
        background-color: ${props => props.theme.colors.secondary};
        color: ${props => props.theme.colors.textSecondary};
    }

    ${props => props.$isActive && css`
        background-color: ${props => props.theme.colors.secondary};
        color: ${props => props.theme.colors.textSecondary};
    `}
`

export default function NavButton({label, isActive}) {
    return (
        <Button $isActive={isActive}>{label}</Button>
    )
}