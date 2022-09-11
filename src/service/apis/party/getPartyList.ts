import { PageInfo, Party } from "@types";

import { api } from "../axios";

interface GetPartyList {
  partyList: Array<Party>;
}

export const getPartyList = async (options?: PageInfo) => {
  const { data } = await api.get<GetPartyList>("/party/list", {
    params: { ...options },
  });
  return data.partyList;
};
