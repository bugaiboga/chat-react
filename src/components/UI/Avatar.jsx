import React from "react";
import styled from "styled-components";

export const Avatar = ({
  src,
  width = "24px",
  height = "24px",
  borderRadius = "50%",
}) => {
  return (
    src && (
      <Img
        src={src}
        width={width}
        height={height}
        borderRadius={borderRadius}
      />
    )
  );
};

const Img = styled.img`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border-radius: ${({ borderRadius }) => borderRadius};
`;
