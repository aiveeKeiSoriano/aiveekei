import { ThemeProvider, styled } from "styled-components";
import Nav from "./components/nav";
import Hero from "./components/hero";
import { GlobalStyle, theme } from "./theme";

const Center = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  place-content: center;
  place-items: center;
  flex-grow: 1;
  background-color: ${({ theme }) => theme.colors.bg};
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Nav />
      <Center>
        <Hero />
      </Center>
    </ThemeProvider>
  );
}

export default App;
