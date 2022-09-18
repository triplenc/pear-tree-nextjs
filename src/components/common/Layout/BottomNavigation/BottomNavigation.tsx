import { memo } from "react";

import { MemoBottomNavigationButton } from "./BottomNavigationButton";
import { BottomNavigationContainer } from "./styles";

export interface NavigationInfo {
  icon: "home" | "chatBubble" | "user";
  link: "/" | "/chat/list" | "/my-page";
  title: "홈" | "채팅" | "My";
}

const BOTTOM_NAVIGATION_INFO: NavigationInfo[] = [
  { icon: "home", link: "/", title: "홈" },
  { icon: "chatBubble", link: "/chat/list", title: "채팅" },
  { icon: "user", link: "/my-page", title: "My" },
];

function BottomNavigation() {
  return (
    <BottomNavigationContainer>
      {BOTTOM_NAVIGATION_INFO.map((navigationInfo) => (
        <MemoBottomNavigationButton
          key={navigationInfo.title}
          {...navigationInfo}
        />
      ))}
    </BottomNavigationContainer>
  );
}

export const MemoBottomNavigation = memo(BottomNavigation);
