import { ThemeProvider } from "styled-components";
import { Theme } from "./styles/Theme";
import { GlobalStyle } from "./styles/GlobalStyle";
import Profile from "./pages/Profile";
import ContextUserGithubProvider from "./contexts/ContextUserGithubProvider";

export default function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <ContextUserGithubProvider>
        <Profile />
      </ContextUserGithubProvider>
    </ThemeProvider>
  )
}