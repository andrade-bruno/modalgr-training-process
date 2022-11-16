import React from "react";
import { ThemeProvider } from "styled-components";
import { themeDark, themeLight } from "./Components/UI/theme";

import Header from "./Components/Header";
import Container from "./Components/Container";

import { GlobalStyle } from "./Components/globalStyle";
import { BtnThemeSwitcher } from "./Components/UI";
import IconTheme from "./Components/UI/IconTheme";

function App() {
  const [isDark, setTheme] = React.useState(true)

  const toggleTheme = () => {
    setTheme((theme) => !theme)
  }

  return (
    <>
      <ThemeProvider theme={isDark ? themeDark : themeLight}>
        <GlobalStyle />
        <BtnThemeSwitcher onClick={toggleTheme}>
          <IconTheme isDark={isDark}/>
        </BtnThemeSwitcher>
        <Header />
        <Container />
      </ThemeProvider>
    </>
  );
}

export default App;
