import { LayoutProps } from "../interfaces";
import { MemoLocationSearchHeader } from "../LocationSearchHeader";

import { HeaderContainer } from "./styles";

export function Header({
  headerType,
}: {
  headerType: LayoutProps["headerType"];
}) {
  return (
    <HeaderContainer>
      {headerType === "locationSearch" ? <MemoLocationSearchHeader /> : null}
      {headerType === "navigation" ? <MemoLocationSearchHeader /> : null}
    </HeaderContainer>
  );
}
