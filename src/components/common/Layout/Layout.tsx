import { MemoBottomNavigation } from "./BottomNavigation";
import { Header } from "./Header";
import { LayoutProps } from "./interfaces";
import { LayoutContainer } from "./styles";

export function Layout({
  backgroundColor = "white",
  children,
  headerConfig,
  headerType = "navigation",
  isShowBottomNavigation = true,
}: LayoutProps) {
  return (
    <LayoutContainer
      backgroundColor={backgroundColor}
      headerType={headerType}
      isShowBottomNavigation={isShowBottomNavigation}>
      <Header headerConfig={headerConfig} type={headerType} />
      {children}
      {isShowBottomNavigation ? <MemoBottomNavigation /> : null}
    </LayoutContainer>
  );
}
