import styled from "styled-components";

import type { TechItemType, TechMetricType } from "../TechSection/ItemsData";

import Close from "../../assets/close.svg";
import IconButton from "../../UI/IconButton/IconButton";
import Image from "../../UI/Image/Image";
import LevelBar from "../LevelBar/LevelBar";

const Wrapper = styled.div`
  min-height: 85vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 2em;

  @media (max-width: ${({ theme }) => theme.breakpoints.m}) {
    padding: 0 1em;
  }
`;

const CloseButton = styled(IconButton)`
  align-self: flex-start;
  padding: 0 0.5rem;
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1em;
  padding: 1rem 0;
  background-color: ${({ theme }) => theme.colors.primary};
`;

const TechImage = styled(Image)`
  width: 100px;
  max-height: 100px;

  @media (max-width: ${({ theme }) => theme.breakpoints.m}) {
    width: 90px;
    max-height: 90px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.s}) {
    width: 80px;
    max-height: 80px;
  }
`;

const Name = styled.p`
  text-transform: uppercase;
  font-size: 50px;
  line-height: 50px;
  font-weight: 500;
  font-family: ${({ theme }) => theme.fonts.display};

  @media (max-width: ${({ theme }) => theme.breakpoints.m}) {
    font-size: 42px;
    line-height: 42px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.s}) {
    font-size: 40px;
  }
`;

const Description = styled.p`
  font-size: 18px;
  font-weight: 500;
  line-height: 28px;
  background-color: ${({ theme }) => theme.colors.primary};
  text-align: left;
  padding: 0 1rem;
  height: 80px;

  @media (max-width: ${({ theme }) => theme.breakpoints.m}) {
    height: 100px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.s}) {
    height: 130px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    height: 150px;
  }
`;

const LevelContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.primary};
`;

interface TechDetailsPropType {
  item: TechItemType;
  onClose: () => void;
}

export default function TechDetails({ item, onClose }: TechDetailsPropType) {
  const METRIC_LABELS: (keyof TechMetricType)[] = Object.keys(
    item.metric,
  ) as (keyof TechMetricType)[];
  return (
    <Wrapper>
      <CloseButton
        icon={Close}
        alt="close-item"
        width="80px"
        height="80px"
        onClick={onClose}
      />
      <Header>
        <TechImage src={item.image} alt={item.name} />
        <Name>{item.name}</Name>
      </Header>
      <Description>{item.description}</Description>
      <LevelContainer>
        {METRIC_LABELS.map((label) => (
          <LevelBar
            key={item.name + label}
            id={item.name + label}
            label={label}
            level={item.metric[label]}
          />
        ))}
      </LevelContainer>
    </Wrapper>
  );
}
