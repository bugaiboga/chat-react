import React from "react";
import styled from "styled-components";

import { ChatTop } from "./partials/top/Top";
import { ChatContent } from "../chat/partials/content/Content";
import { ChatSidebar } from "../chat/partials/sidebar/Sidebar";
import { SendMessage } from "./partials/send/SendMessage";

export const ChatScreen = () => {
  return (
    <Wrapper>
      <Container>
        <ChatTop />
        <ChatContent />
        <SendMessage />
      </Container>
      <ChatSidebar />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  flex: 0 0 80%;
  display: flex;
`;

const Container = styled.div`
  flex: 0 0 75%;
  display: flex;
  flex-direction: column;
`;
