import { useEffect, useMemo, useState } from "react";

import dayjs from "dayjs";

import { reastorage, useReastorage } from "@reastorage/react";

import { fadeOutPlayTime } from "../styles";

const nowShowSplashTime = reastorage("showSplashTime", "");

export function useSplashShow() {
  const today = dayjs();
  const todayString = today.format();

  const [showSplashTime, setShowSplashTime] = useReastorage(nowShowSplashTime);
  const isNeedToShowSplash = useMemo(() => {
    if (showSplashTime === "") return true;

    const timeGapAsDay = today.diff(dayjs(showSplashTime), "hour");

    return timeGapAsDay >= 1;
  }, [showSplashTime, today]);
  const [isShowSplash, setIsShowSplash] = useState(isNeedToShowSplash);
  const [isShowSplashAnimation, setIsShowSplashAnimation] = useState(false);

  useEffect(() => {
    if (!isShowSplash) return;

    setShowSplashTime(todayString);
    setTimeout(() => {
      setIsShowSplashAnimation(true);
    }, 2000);
    setTimeout(() => {
      setIsShowSplash(false);
      setIsShowSplashAnimation(false);
    }, 2000 + fadeOutPlayTime);
  }, [isNeedToShowSplash, setShowSplashTime, todayString, isShowSplash]);

  return { isShowSplash, isShowSplashAnimation };
}
