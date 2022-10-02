import { useSetAtom } from "jotai";
import { useUserState } from "src/hooks/useUserState";

import api from "@api";
import { userLocationAtom } from "@atoms/userAtom";
import { useQuery } from "@tanstack/react-query";
import { UserLocation } from "@types";

export const getUserLocation = async (session: string) => {
  const { data: response } = await api.get<UserLocation>("api/user/location", {
    data: { session },
  });

  return response;
};

export const useUserLocationQuery = () => {
  const setUserLocation = useSetAtom(userLocationAtom);
  const { session } = useUserState();

  return useQuery(["/user/location"], () => getUserLocation(session), {
    enabled: !!session,
    onSuccess: (userLocationResponse) => {
      setUserLocation(userLocationResponse);
    },
    staleTime: 3000,
  });
};

export const setUserLocation = async () => {
  // TODO: set user location post request
};

export const useUserLocationMutate = () => {
  // TODO: user location react-query mutate
};
