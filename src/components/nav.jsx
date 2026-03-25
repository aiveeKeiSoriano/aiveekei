import styled from "styled-components"
import Logo from "./logo"
import NavButton from "./nav-button"


const NavigationWrapper = styled.div`
    width: 100%;
    background-color: var(--primary);
    border-bottom: 4px solid var(--border);
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