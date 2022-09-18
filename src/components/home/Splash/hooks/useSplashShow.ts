import { useEffect, useMemo, useState } from "react";

import { getCookie, setCookie } from "cookies-next";
import dayjs from "dayjs";

import { isString } from "@types";

import { fadeOutPlayTime } from "../styles";

export function useSplashShow() {
  const today = dayjs();
  const todayString = today.format();

  const [showSplashTime, setShowSplashTime] = useState(
    getCookie("showSplashTime"),
  );
  const isNeedToShowSplash = useMemo(() => {
    if (!isString(showSplashTime)) return true;

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

  useEffect(() => {
    setCookie("showSplashTime", showSplashTime);
  }, [showSplashTime]);

  return { isShowSplash, isShowSplashAnimation };
}
