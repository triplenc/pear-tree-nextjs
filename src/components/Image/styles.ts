import styled from "styled-components";

export const ImageStyle = styled.img`
  width: 100%;
  height: auto;
  position: absolute;
  inset: 0;
`;

export const ImageContainer = styled.div`
  width: 100%;
  padding-top: 100%;
  position: relative;
  background-color: ${({ theme }) => theme.color.gray2};
`;
