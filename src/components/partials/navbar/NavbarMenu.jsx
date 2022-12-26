import React from "react";
import {
  UilVolumeOff,
  UilBookmarkFull,
  UilSignout,
} from "@iconscout/react-unicons";

import { List, ListItem, ListItemText, ListItemAvatar } from "../../list";
import { IconButton } from "../../UI";

export const NavbarMenu = () => {
  return (
    <>
      <List>
        <ListItem>
          <ListItemAvatar>
            <IconButton>
              <UilVolumeOff />
            </IconButton>
          </ListItemAvatar>
          <ListItemText text={"Создать канал"} />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <IconButton>
              <UilBookmarkFull />
            </IconButton>
          </ListItemAvatar>
          <ListItemText text={"Избранное"} />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <IconButton>
              <UilSignout />
            </IconButton>
          </ListItemAvatar>
          <ListItemText text={"Выйти"} />
        </ListItem>
      </List>
    </>
  );
};
