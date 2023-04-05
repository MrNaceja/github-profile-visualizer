import { ThemeProvider } from "styled-components";
import { Theme } from "./styles/Theme";
import { GlobalStyle } from "./styles/GlobalStyle";

export default function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
    </ThemeProvider>
  )
}