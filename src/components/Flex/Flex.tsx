import { FlexProps } from "./interfaces";
import { FlexStyle } from "./styles";

export function Flex({ children, ...props }: FlexProps) {
  return <FlexStyle {...props}>{children}</FlexStyle>;
}
