import { MemoBottomNavigation } from "./BottomNavigation";
import { MemoHeader } from "./Header";
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
      <MemoHeader headerConfig={headerConfig} type={headerType} />
      {children}
      {isShowBottomNavigation ? <MemoBottomNavigation /> : null}
    </LayoutContainer>
  );
}
