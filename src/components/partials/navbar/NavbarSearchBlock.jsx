import styled from "styled-components";
import { UilSearch } from "@iconscout/react-unicons";

export const NavbarSearchBlock = () => {
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
  width: 100%;
  display: flex;
  justify-content: end;
`;

const Btn = styled.button`
  background-color: ${({ theme }) => theme.bgColors.primary};
  padding: 5px;
  border-radius: 5px 0px 0px 5px;
  transition: all 0.3s;
`;

const SearchIcon = styled(UilSearch)`
  color: ${({ theme }) => theme.textColors.primary};
`;

const Input = styled.input`
  padding: 11px;
  border-radius: 0px 5px 5px 0px;
  width: 100%;
`;
