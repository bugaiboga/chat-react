import React from "react";
import styled from "styled-components";

export const IconButton = ({ children }) => {
  return <Btn>{children}</Btn>;
};

const Btn = styled.button`
  background: transparent;
  color: ${({ theme }) => theme.textColors.primary};
  padding: 5px;
  opacity: 0.7;

  &:hover {
    opacity: 0.9;
  }
`;
