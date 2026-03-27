import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "./theme";
import Home from "./pages/Home";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Home />
    </ThemeProvider>
  );
}

export default App;
