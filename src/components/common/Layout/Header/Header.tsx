import { HeaderConfig, LayoutProps } from "../interfaces";
import { MemoLocationSearchHeader } from "../LocationSearchHeader";
import { MemoNavigationHeader } from "../NavigationHeader";

import { HeaderContainer } from "./styles";

export function Header({
  headerConfig,
  type,
}: {
  headerConfig?: HeaderConfig;
  type: LayoutProps["headerType"];
}) {
  return (
    <HeaderContainer>
      {type === "locationSearch" ? <MemoLocationSearchHeader /> : null}
      {type === "navigation" ? (
        <MemoNavigationHeader headerConfig={headerConfig} />
      ) : null}
    </HeaderContainer>
  );
}
