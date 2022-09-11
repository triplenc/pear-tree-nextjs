import { TypographyProps } from "./interfaces";
import { TypographyStyle } from "./styles";

export function H1({ children, color }: TypographyProps) {
  return (
    <TypographyStyle color={color} type="h1">
      {children}
    </TypographyStyle>
  );
}

export function H2({ children, color }: TypographyProps) {
  return (
    <TypographyStyle color={color} type="h2">
      {children}
    </TypographyStyle>
  );
}

export function Subtitle1({ children, color }: TypographyProps) {
  return (
    <TypographyStyle color={color} type="subtitle1">
      {children}
    </TypographyStyle>
  );
}

export function Subtitle2({ children, color }: TypographyProps) {
  return (
    <TypographyStyle color={color} type="subtitle2">
      {children}
    </TypographyStyle>
  );
}

export function Body1({ children, color }: TypographyProps) {
  return (
    <TypographyStyle color={color} type="body1">
      {children}
    </TypographyStyle>
  );
}

export function Body2({ children, color }: TypographyProps) {
  return (
    <TypographyStyle color={color} type="body2">
      {children}
    </TypographyStyle>
  );
}

export function Caption({ children, color }: TypographyProps) {
  return (
    <TypographyStyle color={color} type="caption">
      {children}
    </TypographyStyle>
  );
}
