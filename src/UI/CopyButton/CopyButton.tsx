import { useState } from "react";
import styled from "styled-components";

import CopyIcon from "../../assets/copy.svg";
import Image from "../Image/Image";

const Wrapper = styled.div`
  position: relative;
  width: fit-content;
`;

const Button = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  padding-left: 10px;

  &:hover {
    filter: brightness(0.8);
  }

  &:active {
    transform: scale(0.9);
  }
`;

const Feedback = styled.div`
  color: ${(props) => props.theme.colors.textSecondary};
  background-color: ${(props) => props.theme.colors.primary};
  padding: 0 5px;
  border-radius: 4px;
  font-size: 12px;
  position: absolute;
  top: -30px;
`;

interface CopyButtonProps {
  text: string;
}

export default function CopyButton({ text }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Wrapper>
      {copied && <Feedback>copied!</Feedback>}
      <Button onClick={handleCopy}>
        <Image alt="copy" height="24px" src={CopyIcon} width="24px" />
      </Button>
    </Wrapper>
  );
}
