import styled from "styled-components";


const Button = styled.button`
    padding: 0.5em 1em;
    border: none;
    background-color: transparent;
    color: var(--text);
    font-family: var(--sans);
    padding: 20px 20px 16px;
    font-size: 2.8rem;
    line-height: 1;
    font-weight: 600;
    text-decoration: none;
    cursor: pointer;

    &:hover {
        background-color: var(--secondary);
        color: var(--text-secondary);;
    }

    ${props => props.$isActive && `
        background-color: var(--secondary);
        color: var(--text-secondary);
    `}
`

export default function NavButton({label, isActive}) {
    return (
        <Button $isActive={isActive}>{label}</Button>
    )
}