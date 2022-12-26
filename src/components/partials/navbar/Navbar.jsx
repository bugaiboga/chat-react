import React from "react";
import styled from "styled-components";
import { UilUser, UilUsersAlt, UilSearch } from "@iconscout/react-unicons";

import { NavbarContacts } from "./NavbarContacts";
import { IconButton } from "../../UI/Button";
import { NavbarMenu } from "./NavbarMenu";


export const Navbar = () => {
  return (
    <Wrapper>
      <NavContent>
        <BtnWrapper>
          <IconButton>
            <UilUser />
          </IconButton>
        </BtnWrapper>
        <BtnWrapper>
          <IconButton>
            <UilUsersAlt />
          </IconButton>
        </BtnWrapper>
        <BtnWrapper>
          <IconButton>
            <UilSearch />
          </IconButton>
        </BtnWrapper>
      </NavContent>
      <NavbarContacts />
      <NavbarMenu />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  flex: 0 0 20%;
  max-width: 20%;
  border-right: 1px solid ${({ theme }) => theme.borderColors.primary};
  background-color: ${({ theme }) => theme.bgColors.secondary};
`;

const NavContent = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const BtnWrapper = styled.div`
  flex: 0 0 33.33333%;
  max-width: 33.33333%;
  padding: 10px;

  button {
    display: block;
    margin: 0 auto;
  }
`;
