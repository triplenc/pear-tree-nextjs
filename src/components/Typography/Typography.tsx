import { SettledTypographyProps, TypographyProps } from "./interfaces";
import { BodyStyle, H1Style, H2Style, PStyle, TypographyStyle } from "./styles";

export function Typography({
  children,
  color = "#000000",
  fontSize = 1.4,
  fontWeight = "400",
  lineHeight = "1.25",
}: TypographyProps) {
  return (
    <TypographyStyle
      color={color}
      fontSize={fontSize}
      fontWeight={fontWeight}
      lineHeight={lineHeight}
    >
      {children}
    </TypographyStyle>
  );
}

export function H1({ children, color = "black" }: SettledTypographyProps) {
  return <H1Style color={color}>{children}</H1Style>;
}

export function H2({ children, color = "black" }: SettledTypographyProps) {
  return <H2Style color={color}>{children}</H2Style>;
}

export function Body1({ children, color = "black" }: SettledTypographyProps) {
  return (
    <BodyStyle color={color}>
      <strong>{children}</strong>
    </BodyStyle>
  );
}

export function Body2({ children, color = "black" }: SettledTypographyProps) {
  return <BodyStyle color={color}>{children}</BodyStyle>;
}

export function P({ children, color = "black" }: SettledTypographyProps) {
  return <PStyle color={color}>{children}</PStyle>;
}
