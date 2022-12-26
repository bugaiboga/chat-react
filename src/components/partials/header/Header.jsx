import React from "react";
import styled from "styled-components";

import { SearchBlock } from "../header/SearchBlock";
import { Notification } from "../header/Notification";

export const Header = () => {
  return (
    <Wrapper>
      <Logo>Todo App</Logo>
      <ThemeSwitcher></ThemeSwitcher>
      <SearchBlock />

      <Notification />
      <Menu>
        <Profile />
      </Menu>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  padding: 10px 40px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.borderColors.primary};
  background-color: ${({ theme }) => theme.bgColors.secondary};
`;
const Logo = styled.div`
  text-transform: uppercase;
  font-weight: 500;
  font-size: ${({ theme }) => theme.text.title};
`;

const ThemeSwitcher = styled.div``;
const Menu = styled.div``;
const Profile = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: #fff;
`;
