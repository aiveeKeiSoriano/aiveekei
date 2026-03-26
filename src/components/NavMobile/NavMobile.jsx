import styled from "styled-components";

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 100dvh;
  width: 280px;
  transform: ${(props) => (props.$open ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.3s ease;
  z-index: 1000;
`;

export default function NavMobile({ open }) {
  return <Wrapper $open={open}>NavMobile</Wrapper>;
}
