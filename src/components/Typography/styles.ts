import styled from "styled-components";
import { TypographyProps } from "./interfaces";

export const TypographyStyle = styled.p<
  Required<Omit<TypographyProps, "children">>
>`
  color: ${({ theme, color }) => theme.color[color]};
  font-size: ${({ fontSize }) => fontSize}rem;
  font-weight: ${({ fontWeight }) => fontWeight};
  line-height: ${({ lineHeight }) => lineHeight};
  margin: 0;
`;

export const H1Style = styled.h1<{ color: string }>`
  color: ${({ theme, color }) => theme.color[color]};
  font-size: ${({ theme }) => theme.font.size.h1};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  margin: 0;
`;

export const H2Style = styled.h2<{ color: string }>`
  color: ${({ theme, color }) => theme.color[color]};
  font-size: ${({ theme }) => theme.font.size.h2};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  margin: 0;
`;

export const BodyStyle = styled.p<{ color: string }>`
  color: ${({ theme, color }) => theme.color[color]};
  font-size: ${({ theme }) => theme.font.size.body};
  font-weight: ${({ theme }) => theme.font.weight.normal};
  margin: 0;
`;

export const PStyle = styled.p<{ color: string }>`
  color: ${({ theme, color }) => theme.color[color]};
  font-size: ${({ theme }) => theme.font.size.p};
  font-weight: ${({ theme }) => theme.font.weight.normal};
  margin: 0;
`;
