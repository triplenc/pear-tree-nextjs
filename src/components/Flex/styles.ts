import styled from "styled-components";
import { FlexProps } from "./interfaces";

export const FlexStyle = styled.div<FlexProps>`
  display: flex;
  ${({ direction }) => direction && `flex-direction: ${direction};`}
  ${({ justify }) => justify && `justify-content: ${justify};`}
  ${({ align }) => align && `align-items: ${align};`}
  ${({ gap }) => gap && `gap: ${gap}rem;`}
  ${({ padding }) => padding && `padding: ${padding};`}
  ${({ margin }) => margin && `margin: ${margin};`}
`;
