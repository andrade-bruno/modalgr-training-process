import React from "react";
import { ThemeProvider } from "styled-components";
import { themeDark, themeLight } from "./Components/UI/theme";

import Header from "./Components/Header";
import Container from "./Components/Container";

import { GlobalStyle } from "./Components/globalStyle";

function App() {
  return (
    <>
      <ThemeProvider theme={themeDark}>
        <GlobalStyle />
        <Header />
        <Container />
      </ThemeProvider>
    </>
  );
}

export default App;
