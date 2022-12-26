import React from "react";
import styled from "styled-components";
import { UilEllipsisV, UilSearch } from "@iconscout/react-unicons";

import { IconButton } from "../../../../components/UI";

export const ChatTop = () => {
  return (
    <Wrapper>
      <LeftSide>
        <Text>Lorem, ipsum.</Text>
        <SubText>был(а) онлайн:</SubText>
      </LeftSide>
      <RightSide>
        <IconButton>
          <UilSearch />
        </IconButton>
        <IconButton>
          <UilEllipsisV />
        </IconButton>
      </RightSide>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  padding: 10px 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme.borderColors.primary};
  background-color: ${({ theme }) => theme.bgColors.secondary};
  flex: 0 0 10%;
`;
const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
`;
const RightSide = styled.div`
  display: flex;
`;

const Text = styled.p``;
const SubText = styled.h5`
  color: ${({ theme }) => theme.textColors.gray};
`;
