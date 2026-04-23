import styled from "styled-components";

import type { TechItem } from "../TechGrid/Items";

import Close from "../../assets/close.svg";
import IconButton from "../../UI/IconButton/IconButton";
import Image from "../../UI/Image/Image";

const Wrapper = styled.div`
  min-height: 85vh;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const CloseButton = styled(IconButton)`
  align-self: flex-start;
  padding: 0 0.5rem;
`;

const Info = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1em;
  padding: 1rem 0;
  background-color: ${({ theme }) => theme.colors.primary};
`;

const Name = styled.p`
  text-transform: uppercase;
  font-size: 60px;
  line-height: 60px;
  font-weight: 500;
  font-family: ${({ theme }) => theme.fonts.display};
`;

const Description = styled.p`
  font-size: 18px;
  font-weight: 500;
  line-height: 28px;
  background-color: ${({ theme }) => theme.colors.primary};
  text-align: left;
  padding: 0 1rem;
`;

interface TechDetailsProps {
  item: TechItem;
  onClose: () => void;
}

export default function TechDetails({ item, onClose }: TechDetailsProps) {
  return (
    <Wrapper>
      <CloseButton
        icon={Close}
        alt="close-item"
        width="80px"
        height="80px"
        onClick={onClose}
      />
      <Info>
        <Image src={item.image} alt={item.name} width="100px" />
        <Name>{item.name}</Name>
      </Info>
      <Description>{item.description}</Description>
    </Wrapper>
  );
}
