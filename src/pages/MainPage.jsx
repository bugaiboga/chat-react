import React from "react";
import styled from "styled-components";

import { Header } from "../components/partials/header/Header";
import { Navbar } from "../components/partials/navbar/Navbar";
import { ChatScreen } from "../screens/chat/ChatScreen";

export const MainPage = () => {
  return (
    <Wrapper>
      <Header />
      <Inner>
        <Navbar />
        <ChatScreen />
      </Inner>
    </Wrapper>
  );
};

const Wrapper = styled.div``;
const Inner = styled.div`
  display: flex;
  height: calc(100vh - 60px);
`;
