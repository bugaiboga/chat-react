import React from "react";
import styled from "styled-components";

import { MessageLayout } from "../../UI/MessageLayout";
import { MessageText } from "../../UI/MessageText";

export const ChatContent = () => {
  return (
    <Wrapper>
      <Messages>
        <MessageDate dateTime="04.11.2022">04.11.2022</MessageDate>
        <MessageLayout userName={"lorem lorem"} itsMy={false}>
          <MessageText message="text" />
          <MessageText message="text" />
          <MessageText message="text" />
          <MessageText
            message="
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente nesciunt blanditiis quod. Repellendus modi fugit aliquam delectus explicabo consequuntur repudiandae vero amet deserunt! Inventore, amet. Inventore, asperiores consequatur eum quod accusamus ipsa, cum necessitatibus voluptatem unde dolor odio vel explicabo corporis voluptates. Voluptatem voluptatibus aut voluptate qui quia enim harum."
          />
        </MessageLayout>
        <MessageLayout userName={"lorem lorem"} itsMy={true}>
          <MessageText message="text" />
          <MessageText message="text" />
          <MessageText message="text" />
          <MessageText
            message="
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente nesciunt blanditiis quod. Repellendus modi fugit aliquam delectus explicabo consequuntur repudiandae vero amet deserunt! Inventore, amet. Inventore, asperiores consequatur eum quod accusamus ipsa, cum necessitatibus voluptatem unde dolor odio vel explicabo corporis voluptates. Voluptatem voluptatibus aut voluptate qui quia enim harum."
          />
        </MessageLayout>
      </Messages>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  flex: 0 0 80%;
  padding: 20px;
`;
const Messages = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  max-height: 65vh;

  &::-webkit-scrollbar {
    display: none;
  }
`;
const MessageDate = styled.time`
  padding: 5px 8px;
  background-color: ${({ theme }) => theme.bgColors.secondary};
  color: ${({ theme }) => theme.textColors.gray};
  border-radius: 5px;
  display: block;
  margin: 0px auto 10px auto;
`;
