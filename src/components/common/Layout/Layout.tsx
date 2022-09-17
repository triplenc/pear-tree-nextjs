import { MemoBottomNavigation } from "./BottomNavigation";
import { Header } from "./Header";
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
      <Header headerType={headerType} />
      {children}
      {isShowBottomNavigation ? <MemoBottomNavigation /> : null}
    </LayoutContainer>
  );
}
