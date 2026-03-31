import styled from "styled-components";
import IconButton from "../../UI/IconButton/IconButton";
import CloseIcon from "../../assets/close.svg";
import NavButton from "../NavButton/NavButton";

interface WrapperProps {
  $open: boolean;
}

const Wrapper = styled.div<WrapperProps>`
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

const Header = styled.div`
  display: flex;
  justify-content: flex-end;
  background-color: ${(props) => props.theme.colors.primary};
  border-bottom: 4px solid ${(props) => props.theme.colors.border};
  height: 96px;
`;

const CloseButton = styled(IconButton)`
  cursor: pointer;
  align-self: flex-end;
  padding: 20px 20px 16px;
`;

const Items = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

interface NavDrawerProps {
  isOpen: boolean;
  close: () => void;
  items: string[];
}

export default function NavDrawer({ isOpen, close, items }: NavDrawerProps) {
  return (
    <Wrapper $open={isOpen}>
      <Header>
        <CloseButton
          icon={CloseIcon}
          height="60px"
          width="60px"
          onClick={close}
        />
      </Header>
      <Items>
        {items.map((item) => (
          <NavButton key={item} label={item} isForMobile />
        ))}
      </Items>
    </Wrapper>
  );
}
