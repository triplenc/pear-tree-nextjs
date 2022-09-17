import { MemoBottomNavigation } from "./BottomNavigation";
import { LayoutProps } from "./interfaces";
import { LayoutContainer } from "./styles";

export function Layout({
  backgroundColor = "white",
  children,
  headerType = "navigation",
  isShowBottomNavigation = true,
}: LayoutProps) {
  return (
    <LayoutContainer
      backgroundColor={backgroundColor}
      headerType={headerType}
      isShowBottomNavigation={isShowBottomNavigation}>
      {children}
      {isShowBottomNavigation ? <MemoBottomNavigation /> : null}
    </LayoutContainer>
  );
}
