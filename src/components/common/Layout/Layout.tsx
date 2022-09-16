import { BottomNavigation } from "./BottomNavigation/BottomNavigation";
import { LayoutProps } from "./interfaces";
import { LayoutContainer } from "./styles";

export function Layout({
  children,
  headerType,
  isShowBottomNavigation,
}: LayoutProps) {
  return (
    <LayoutContainer
      headerType={headerType}
      isShowBottomNavigation={isShowBottomNavigation}>
      {children}
      {isShowBottomNavigation ? <BottomNavigation /> : null}
    </LayoutContainer>
  );
}
