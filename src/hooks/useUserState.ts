import { useAtom } from "jotai";
import { RESET } from "jotai/utils";

import { userSessionAtom } from "@atoms/userAtom";

export const useUserState = () => {
  const [session, setSession] = useAtom(userSessionAtom);

  const logout = () => {
    setSession(RESET);
  };

  const login = (_session: string) => {
    setSession(_session);
  };

  return { login, logout, session };
};
