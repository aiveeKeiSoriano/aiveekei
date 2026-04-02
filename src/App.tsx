import { ThemeProvider } from "styled-components";

import Home from "./pages/Home";
import { GlobalStyle, theme } from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Home />
    </ThemeProvider>
  );
}

export default App;
