import { getPartyList } from "@apis/party";
import { useQuery } from "@tanstack/react-query";
import { Party } from "@types";

interface PartyListQueryProps {
  initialData: Array<Party>;
  page: number;
}

export function usePartyListQuery({ initialData, page }: PartyListQueryProps) {
  return useQuery(
    ["partyList"],
    () => {
      getPartyList({ page });
    },
    // TODO: why has been set type of void function on initialData? different from here https://tanstack.com/query/v4/docs/guides/ssr#using-nextjs
    { initialData: () => initialData },
  );
}
