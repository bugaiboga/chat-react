import React from "react";
import styled from "styled-components";

import { List, ListItem, ListItemText, ListItemAvatar } from "../../list";
import { Avatar } from "../../UI/Avatar";

export const NavbarContacts = () => {
  return (
    <Div>
      <Title>Контакты</Title>
      <Wrapper>
        <NavbarList>
          <ListItem>
            <ListItemAvatar>
              <Avatar
                src={
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA4kU1pjp5bSZ_Otr-gUUwbMMJa3_M-qDQ_w&usqp=CAU"
                }
              />
            </ListItemAvatar>
            <ListItemText text={"text"} subtext={"subtext"} />
            <ListDot>
              <Span></Span>
            </ListDot>
          </ListItem>
        </NavbarList>
      </Wrapper>
    </Div>
  );
};

const Div = styled.div`
  border-top: 1px solid ${({ theme }) => theme.borderColors.primary};
  border-bottom: 1px solid ${({ theme }) => theme.borderColors.primary};
`;
const Wrapper = styled.div`
  max-height: 50vh;
  min-height: 50vh;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.bgColors.additional};
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.bgColors.primary};
  }
`;
const NavbarList = styled(List)``;
const Title = styled.h4`
  font-size: ${({ theme }) => theme.text.large};
  color: ${({ theme }) => theme.textColors.gray};
  padding: 15px;
`;
const ListDot = styled.div`
  flex: 0 0 0 5%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Span = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: red;
`;
