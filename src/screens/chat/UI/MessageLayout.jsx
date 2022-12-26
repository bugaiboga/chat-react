import React from "react";
import styled from "styled-components";

import { Avatar } from "../../../components/UI";

export const MessageLayout = ({ userAvatar, userName, children, itsMy }) => {
  return (
    <Wrapper itsMy={itsMy}>
      <MessageUserAvatar itsMy={itsMy}>
        <Avatar
          src={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA4kU1pjp5bSZ_Otr-gUUwbMMJa3_M-qDQ_w&usqp=CAU"
          }
        />
      </MessageUserAvatar>
      <MessageContent itsMy={itsMy}>
        {itsMy ? null : <MessageUserName>{userName}</MessageUserName>}
        {children}
      </MessageContent>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;

  ${({ itsMy }) => itsMy && "justify-content: end;"}
`;
const MessageUserAvatar = styled.div`
  flex: 0 0 30px;
  max-width: 30px;

  ${({ itsMy }) => itsMy && "order: 1;"}
  ${({ itsMy }) => (itsMy ? "margin-left: 10px;" : "margin-right: 10px;")}
`;
const MessageUserName = styled.p`
  font-size: ${({ theme }) => theme.text.small};
  margin-bottom: 4px;
`;
const MessageContent = styled.div`
  flex: 0 0 80%;
  max-width: 80%;
  display: flex;
  flex-direction: column;

  ${({ itsMy }) => itsMy && "align-items: flex-end;"}
`;
