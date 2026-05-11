import type { ReactNode } from "react";

import styled from "styled-components";

const Wrapper = styled.div`
  height: 1.2rem;
  width: fit-content;
  padding: 0.7em 0.5em;
  border: 3px solid ${({ theme }) => theme.colors.border};
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;
  font-size: 0.9em;
  font-weight: 700;
`;

interface TagType {
  children: ReactNode;
}

export default function Tag({ children }: TagType) {
  return <Wrapper>{children}</Wrapper>;
}
