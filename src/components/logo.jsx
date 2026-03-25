import styled from "styled-components"
import LogoBlackBg from "../assets/black-bg.png"


const LogoWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    object-fit: contain;
    padding: 20px 20px 16px;
`

const LogoImg = styled.img`
    width: 60px;
    height: 60px;
    object-fit: contain;
`


export default function Logo() {
    return(
        <LogoWrapper>
            <LogoImg src={LogoBlackBg} alt="logo" />
        </LogoWrapper>
    )
}