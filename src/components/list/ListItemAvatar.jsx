import React from "react";
import styled from "styled-components";

export const ListItemAvatar = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.div`
  flex: 0 0 20%;
  max-width: 20%;
`;
