import styled from "styled-components"
import Logo from "./logo"
import NavButton from "./nav-button"


const NavigationWrapper = styled.div`
    width: 100%;
    background-color: ${props => props.theme.colors.primary};
    border-bottom: 4px solid ${props => props.theme.colors.border};
`

const NavItems = styled.div`
    display: flex;
`

export default function Nav() {
    
    return (
        <NavigationWrapper>
            <NavItems>
                <Logo />
                <NavButton label="Projects" />
            </NavItems>
        </NavigationWrapper>
    )
}