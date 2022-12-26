import React from "react";
import styled from "styled-components";

export const ListItem = ({ children }) => {
  return children && <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.li`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 5px 20px;

  &:hover {
    background-color: ${({ theme }) => theme.bgColors.additional};
  }
`;
