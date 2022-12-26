import React from "react";
import styled from "styled-components";

export const MessageText = ({ message }) => {
  return (
    <Wrapper>
      <Text>{message}</Text>
      <Time>17:37</Time>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.bgMessageColors.primary};
  padding: 5px 20px 20px 5px;
  width: fit-content;
  position: relative;
  margin-bottom: 10px;
  position: relative;
`;
const Text = styled.p``;

const Time = styled.time`
  color: ${({ theme }) => theme.textColors.gray};
  font-size: 12px;
  position: absolute;
  right: 3px;
  bottom: 3px;
`;
