import { useEffect, useMemo, useState } from "react";

import { useAtomValue } from "jotai";
import { userLocationAtom } from "src/atoms/userAtom";

import { useUserLocationQuery } from "@queries/user/useUserLocationQuery";

export const useUserLocation = () => {
  const { isInitialLoading } = useUserLocationQuery();
  const userLocation = useAtomValue(userLocationAtom);
  const [userLocationAsString, setUserLocationAsString] = useState("");

  const isNeedToSetLocation = useMemo(() => {
    const { 시군구, 시도, 읍면동 } = userLocation;

    return !시군구 && !시도 && !읍면동;
  }, [userLocation]);

  useEffect(() => {
    if (isInitialLoading) return;

    const { 시군구, 읍면동 } = userLocation;

    if (isNeedToSetLocation) {
      setUserLocationAsString("위치를 설정하세요");
      return;
    }

    setUserLocationAsString(`${시군구} ${읍면동}`);
  }, [userLocation, isNeedToSetLocation, isInitialLoading]);

  return { isNeedToSetLocation, userLocation, userLocationAsString };
};
