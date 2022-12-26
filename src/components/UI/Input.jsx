import React from "react";
import styled from "styled-components";

export const Input = ({ children, type = "text", placeholder }) => {
  return (
    <Fieldset>
      <Label>
        <InputTeg type={type} placeholder={placeholder} />
        <Button>{children}</Button>
      </Label>
    </Fieldset>
  );
};

const Fieldset = styled.fieldset`
  border: none;
`;
const Label = styled.label`
  display: flex;
  align-items: center;
`;
const InputTeg = styled.input`
  padding: 10px;
  border-radius: 5px 0px 0px 5px;
  width: 100%;
`;
const Button = styled.span`
  background-color: ${({ theme }) => theme.bgColors.primary};
  color: ${({ theme }) => theme.textColors.primary};
  padding: 4px;
  border-radius: 0px 5px 5px 0px; ;
`;
