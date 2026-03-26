import styled from "styled-components"
import Logo from "../Logo/Logo"
import NavButton from "../NavButton/NavButton"


const Wrapper = styled.div`
    width: 100%;
    background-color: ${props => props.theme.colors.primary};
    border-bottom: 4px solid ${props => props.theme.colors.border};
    position: sticky;
    top: 0;
`

const Items = styled.div`
    display: flex;
`

export default function Nav() {
    
    return (
        <Wrapper>
            <Items>
                <Logo />
                <NavButton label="Projects" />
            </Items>
        </Wrapper>
    )
}