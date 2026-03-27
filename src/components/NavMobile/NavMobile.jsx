import styled from "styled-components";
import IconButton from "../IconButton/IconButton";
import CloseIcon from "../../assets/close.svg";

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 100dvh;
  width: 450px;
  max-width: 100dvw;
  transform: ${(props) => (props.$open ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.3s ease;
  z-index: 1000;
  display: flex;
  flex-direction: column; 
  border-left: 4px solid ${(props) => props.theme.colors.border};
  background-color: ${(props) => props.theme.colors.bg};
`;

const CloseButton = styled(IconButton)`
  cursor: pointer;
  align-self: flex-end;
  padding: 20px 20px 16px;
`;

export default function NavMobile({ isOpen, close }) {
  return (
    <Wrapper $open={isOpen}>
      <CloseButton  
        icon={CloseIcon}
        height="60px"
        width="60px"
        onClick={close}
      />
    </Wrapper>
  );
}
