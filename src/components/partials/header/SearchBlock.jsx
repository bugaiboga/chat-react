import React from "react";
import styled from "styled-components";
import { UilSearch } from "@iconscout/react-unicons";

export const SearchBlock = () => {
  return (
    <Wrapper>
      <Btn>
        <SearchIcon />
      </Btn>
      <Input type="text" placeholder="Пойск..." />
    </Wrapper>
  );
};

const Wrapper = styled.form`
  display: flex;
  margin: 0 auto;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.borderColors.primary};
`;
const Input = styled.input`
  padding: 11px;
  border-radius: 0px 5px 5px 0px;
`;
const Btn = styled.button`
  background-color: ${({ theme }) => theme.bgColors.additional};
  padding: 5px;
  border-radius: 5px 0px 0px 5px;
`;
const SearchIcon = styled(UilSearch)`
  color: ${({ theme }) => theme.textColors.primary};
`;
