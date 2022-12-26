import React from "react";
import styled from "styled-components";
import { UilImageUpload, UilSmile, UilMessage } from "@iconscout/react-unicons";

import { IconButton } from "../../../../components/UI";

export const SendMessage = () => {
  return (
    <Wrapper>
      <IconButton>
        <UilImageUpload />
      </IconButton>
      <Input type="text" placeholder="Написать сообщение..." />
      <IconButton>
        <UilMessage />
      </IconButton>
      <IconButton>
        <UilSmile />
      </IconButton>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.bgColors.secondary};
  flex: 0 0 10%;
  border-top: 1px solid ${({ theme }) => theme.borderColors.primary};
  padding: 10px;
  display: flex;
  align-items: center;
`;
const Input = styled.input`
  padding: 10px;
  width: 100%;
  border-radius: 5px;
`;
