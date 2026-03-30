import styled from "styled-components";
import LogoBlackBg from "../../assets/logo-black-bg.png";
import IconButton from "../../UI/IconButton/IconButton";

const Wrapper = styled(IconButton)`
  display: flex;
  align-items: center;
  justify-content: center;
  object-fit: contain;
  padding: 20px 20px 16px;
  cursor: pointer;
  flex: 0;
`;

export default function Logo() {
  return (
    <Wrapper icon={LogoBlackBg} height="60px" width="60px" />
  );
}
