import React from "react";
import styled from "styled-components";
import { UilUser } from "@iconscout/react-unicons";
import { Input } from "../../components/UI";

export const LoginScreen = () => {
  return (
    <Wrapper>
      <Title>Вход</Title>
      <Form>
        <Input placeholder={"Ввелите логин..."}>
          <UilUser />
        </Input>
        <Input placeholder={"Ввелите логин..."}>
          <UilUser />
        </Input>
      </Form>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.bgColors.secondary};
  flex: 0 0 30%;
  padding: 20px 50px;
  border-radius: 5px;
`;
const Title = styled.h3`
  font-size: ${({ theme }) => theme.text.title};
  opacity: 0.6;
  text-align: center;
  margin-bottom: 14px;
`;
const Form = styled.form``;
