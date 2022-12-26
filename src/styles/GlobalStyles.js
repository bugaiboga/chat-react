import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: monospace;
  font-family: 'Rubik', sans-serif;
  font-weight: 400;
  font-size: 16px;
  color: ${({ theme }) => theme.textColors.primary};
}

input {
  background-color: ${({ theme }) => theme.bgColors.primary};
  color: ${({ theme }) => theme.textColors.primary};
  outline: inherit;
  border: none;

}

button {
  cursor: pointer;  
  border: none;
}
`;
