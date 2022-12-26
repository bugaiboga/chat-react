import React from "react";
import styled from "styled-components";
import {
  UilBell,
  UilHeadphonesAlt,
  UilVideo,
  UilImage,
  UilShare,
  UilTrashAlt,
  UilBan,
} from "@iconscout/react-unicons";

import { IconButton, Avatar } from "../../../../components/UI";
import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "../../../../components/list";

export const ChatSidebar = () => {
  return (
    <Wrapper>
      <Top>
        <AvatarImg
          src={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA4kU1pjp5bSZ_Otr-gUUwbMMJa3_M-qDQ_w&usqp=CAU"
          }
          width="58px"
          height="58px"
        />
        <TopContet>
          <Name>12345678 12345678 </Name>
          <Text>Lorem ipsum</Text>
        </TopContet>
      </Top>
      <Content>
        <List>
          <ListItem>
            <ListItemAvatar>
              <IconButton>
                <UilBell />
              </IconButton>
            </ListItemAvatar>
            <ListItemText text={"Уведомления"} />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <IconButton>
                <UilImage />
              </IconButton>
            </ListItemAvatar>
            <ListItemText text={"Фотографии"} />
            <Count>0</Count>
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <IconButton>
                <UilVideo />
              </IconButton>
            </ListItemAvatar>
            <ListItemText text={"Видео"} />
            <Count>0</Count>
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <IconButton>
                <UilHeadphonesAlt />
              </IconButton>
            </ListItemAvatar>
            <ListItemText text={"Аудиофайлов"} />
            <Count>0</Count>
          </ListItem>
        </List>
      </Content>
      <Bottom>
        <List>
          <ListItem>
            <ListItemAvatar>
              <IconButton>
                <UilShare />
              </IconButton>
            </ListItemAvatar>
            <ListItemText text={"Поделиться контактом"} />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <IconButton>
                <UilTrashAlt />
              </IconButton>
            </ListItemAvatar>
            <ListItemText text={"Удалить контакт"} />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <IconButton>
                <UilBan />
              </IconButton>
            </ListItemAvatar>
            <ListItemText text={"Заблокировать"} />
          </ListItem>
        </List>
      </Bottom>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  flex: 0 0 25%;
  height: 100%;
  background-color: ${({ theme }) => theme.bgColors.primary};
  border-left: 1px solid ${({ theme }) => theme.borderColors.primary};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Top = styled.div`
  padding: 15px;
  background-color: ${({ theme }) => theme.bgColors.secondary};
  display: flex;
  justify-content: space-between;
  flex: 0 0 20%;
  max-height: 20%;
  align-items: center;
`;
const AvatarImg = styled(Avatar)`
  flex: 0 0 30%;
  max-width: 30%;
`;
const TopContet = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  flex: 0 0 70%;
  max-width: 70%;
`;
const Name = styled.h4`
  font-size: ${({ theme }) => theme.text.small};
  opacity: 0.8;
`;
const Text = styled.p`
  font-size: ${({ theme }) => theme.text.small};
  opacity: 0.7;
  margin-top: 5px;
`;

const Content = styled.nav`
  background-color: ${({ theme }) => theme.bgColors.secondary};
  flex: 0 0 40%;
  max-height: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Count = styled.p`
  font-size: ${({ theme }) => theme.text.small};
  opacity: 0.7;
`;
const Bottom = styled.div`
  flex: 0 0 30%;
  max-height: 30%;
  background-color: ${({ theme }) => theme.bgColors.secondary};
`;
