import { useEffect, useState } from "react";

import { getCookie, setCookie } from "cookies-next";
import dayjs from "dayjs";

import { isString } from "@types";

import { fadeOutPlayTime } from "../styles";

export function useSplashShow() {
  const [isShowSplash, setIsShowSplash] = useState(false);
  const [isShowSplashAnimation, setIsShowSplashAnimation] = useState(false);

  useEffect(() => {
    const today = dayjs();
    const savedShowSplashTime = getCookie("showSplashTime");

    if (!isString(savedShowSplashTime)) {
      setIsShowSplash(true);
      return;
    }

    const timeGapAsDay = today.diff(savedShowSplashTime, "day");
    setIsShowSplash(timeGapAsDay >= 1);
  }, []);

  useEffect(() => {
    if (!isShowSplash) return;

    setCookie("showSplashTime", dayjs().format());

    setTimeout(() => {
      setIsShowSplashAnimation(true);
    }, 2000);
    setTimeout(() => {
      setIsShowSplashAnimation(false);
      setIsShowSplash(false);
    }, 2000 + fadeOutPlayTime);
  }, [isShowSplash]);

  return { isShowSplash, isShowSplashAnimation };
}
