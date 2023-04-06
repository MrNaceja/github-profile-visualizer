import { ThemeProvider } from "styled-components";
import { Theme } from "./styles/Theme";
import { GlobalStyle } from "./styles/GlobalStyle";
import Profile from "./pages/Profile";

export default function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Profile />
    </ThemeProvider>
  )
}