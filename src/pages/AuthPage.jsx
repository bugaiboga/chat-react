import React from "react";
import styled from "styled-components";

import { LoginScreen } from "../screens/login/LoginScreen";

export const AuthPage = () => {
  return (
    <Wrapper>
      <LoginScreen />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
