import { atomWithReset, atomWithStorage } from "jotai/utils";

import { UserLocation } from "@types";

export const userLocationAtom = atomWithReset<UserLocation>({
  latitude: 33.5563,
  longitude: 126.79581,
  시군구: "",
  시도: "",
  읍면동: "",
});

export const userSessionAtom = atomWithStorage("session", "");
