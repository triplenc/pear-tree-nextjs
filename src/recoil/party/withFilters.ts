import { selector } from "recoil";

import { partyAtom, partyFilterStateAtom } from "./atom";

const partyWithFilters = selector({
  get: ({ get }) => {
    const partyList = get(partyAtom);

    switch (get(partyFilterStateAtom)) {
      case "all":
        return partyList;
      case "active":
        return partyList.filter((party) => party.active);
      default:
        return [];
    }
  },
  key: "partyWithFilters",
});

export default partyWithFilters;
