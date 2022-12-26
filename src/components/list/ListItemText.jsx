import React from "react";
import styled from "styled-components";

export const ListItemText = ({ text, subtext }) => {
  return (
    text && (
      <Wrapper>
        {text && <Text>{text}</Text>}
        {subtext && <SubText>{subtext}</SubText>}
      </Wrapper>
    )
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0 0 75%;
  max-width: 75%;
`;
const Text = styled.p`
  font-size: ${({ theme }) => theme.text.small};
  font-weight: 700;
  opacity: 0.8;
`;
const SubText = styled.p`
  font-size: ${({ theme }) => theme.text.small};
  color: ${({ theme }) => theme.textColors.gray};
  opacity: 0.7;
`;
