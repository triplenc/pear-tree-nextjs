import { TypographyProps } from "./interfaces";
import { TypographyStyle } from "./styles";

export function H1({ children, color }: TypographyProps) {
  return (
    <TypographyStyle type="h1" color={color}>
      {children}
    </TypographyStyle>
  );
}

export function H2({ children, color }: TypographyProps) {
  return (
    <TypographyStyle type="h2" color={color}>
      {children}
    </TypographyStyle>
  );
}

export function Subtitle1({ children, color }: TypographyProps) {
  return (
    <TypographyStyle type="subtitle1" color={color}>
      {children}
    </TypographyStyle>
  );
}

export function Subtitle2({ children, color }: TypographyProps) {
  return (
    <TypographyStyle type="subtitle2" color={color}>
      {children}
    </TypographyStyle>
  );
}

export function Body1({ children, color }: TypographyProps) {
  return (
    <TypographyStyle type="body1" color={color}>
      {children}
    </TypographyStyle>
  );
}

export function Body2({ children, color }: TypographyProps) {
  return (
    <TypographyStyle type="body2" color={color}>
      {children}
    </TypographyStyle>
  );
}

export function Caption({ children, color }: TypographyProps) {
  return (
    <TypographyStyle type="caption" color={color}>
      {children}
    </TypographyStyle>
  );
}
