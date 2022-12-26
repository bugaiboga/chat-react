import React from "react";
import styled, { ThemeProvider } from "styled-components";

import { GlobalStyles } from "./styles/GlobalStyles";
import { dark } from "./styles/ThemeStyled";
import { MainPage } from "./pages/MainPage";
import { AuthPage } from "./pages/AuthPage";

export const App = () => {
  return (
    <ThemeProvider theme={dark}>
      <GlobalStyles />
      <Wrapper>
        <MainPage />
      </Wrapper>
    </ThemeProvider>
  );
};

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.bgColors.primary};
  min-height: 100vh;
  min-width: 100%;
`;
