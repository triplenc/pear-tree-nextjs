import { memo, useMemo } from "react";

import Link from "next/link";
import { useRouter } from "next/router";

import ChatIcon from "@icons/chat-bubble.svg";
import HomeIcon from "@icons/home.svg";
import MyPageIcon from "@icons/user.svg";
import { theme } from "@styles";

import { NavigationInfo } from "./BottomNavigation";
import { BottomNavigationLink } from "./styles";

const MemoBottomNavigationIcon = memo(function BottomNavigationIcon({
  icon,
  isActive,
}: {
  icon: NavigationInfo["icon"];
  isActive: boolean;
}) {
  const color = useMemo(
    () => (isActive ? theme.colors.main01 : theme.colors.gray01),
    [isActive],
  );

  switch (icon) {
    case "home":
      return <HomeIcon fill={color} />;
    case "chatBubble":
      return <ChatIcon fill={color} />;
    case "user":
      return <MyPageIcon fill={color} />;
  }
});

function BottomNavigationButton({ icon, link, title }: NavigationInfo) {
  const router = useRouter();
  const isActive = useMemo(() => {
    if (link === "/") return router.pathname === link;
    return router.pathname.includes(link);
  }, [router, link]);

  return (
    <Link passHref href={link}>
      <BottomNavigationLink active={isActive}>
        <MemoBottomNavigationIcon icon={icon} isActive={isActive} />
        {title}
      </BottomNavigationLink>
    </Link>
  );
}

export const MemoBottomNavigationButton = memo(BottomNavigationButton);
