import React from "react";
import styled from "styled-components";
import { UilBell } from "@iconscout/react-unicons";

import { IconButton } from "../../UI/Button";

export const Notification = () => {
  return (
    <Wrapper>
      <IconButton>
        <UilBell />
      </IconButton>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-right: 8px;
`;
