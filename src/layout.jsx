import styled from "styled-components";
import Nav from "./components/Nav/Nav";

const Wrapper = styled.div`
    height: 100vh;
    overflow-y: hidden;
`;

const Content = styled.div`
  height: calc(100vh - 96px);
  display: flex;
  flex-direction: column;
  gap: 25px;
  flex-grow: 1;
  background-color: ${({ theme }) => theme.colors.bg};
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 24px;
  }

  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.bg};
    border-left: 4px solid ${({ theme }) => theme.colors.border};
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.primary};
    border: 4px solid ${({ theme }) => theme.colors.border};
    border-right: none;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.colors.tertiary};
  }
`;

export default function Layout({ children }) {
  return (
    <Wrapper>
      <Nav />
      <Content>{children}</Content>
    </Wrapper>
  );
}
