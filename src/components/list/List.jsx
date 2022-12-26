import React from "react";
import styled from "styled-components";

export const List = ({ children }) => {
  return <Wrapper>{children && children}</Wrapper>;
};

const Wrapper = styled.ul`
  display: flex;
  flex-direction: column;
`;
