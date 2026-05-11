import { useEffect, useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const LabelWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Label = styled.p`
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 1em;
  text-transform: uppercase;
  flex-grow: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    font-size: 1rem;
  }
`;

const BarContainer = styled.div`
  width: 100%;
  height: 40px;
  border: 4px solid ${({ theme }) => theme.colors.border};
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 7px;
  padding: 2px;
  gap: 1px;
  display: flex;
`;

const Bar = styled.div<{ $shaded?: boolean; $index: number }>`
  height: 100%;
  flex: 1;
  transition: ${({ $index }) =>
    `background-color 0s step-start ${$index * 0.05}s`};
  background-color: ${({ theme, $shaded }) =>
    $shaded ? theme.colors.border : "transparent"};
  border: 3px solid ${({ theme }) => theme.colors.border};
  border-radius: 4px;
`;

const BAR_COUNT = 25;

interface LevelBarPropType {
  id: string;
  label: string;
  level: number;
}

export default function LevelBar({ id, label, level }: LevelBarPropType) {
  const [shadedBars, setShadedBars] = useState<number>(0);

  /**
   * shadedBars state and setTimeout are used to let empty bars render first,
   * allowing the transition to show.
   */
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShadedBars(Math.round((level / 100) * BAR_COUNT));
    }, 100);
    return () => clearTimeout(timeoutId);
  }, [level]);

  return (
    <Wrapper>
      <LabelWrapper>
        <Label>{label}</Label>
        <Label>{level}%</Label>
      </LabelWrapper>
      <BarContainer>
        {Array.from({ length: BAR_COUNT }, (_, index) => (
          <Bar
            key={`${id}-${index}`}
            $shaded={index < shadedBars}
            $index={index}
          />
        ))}
      </BarContainer>
    </Wrapper>
  );
}
