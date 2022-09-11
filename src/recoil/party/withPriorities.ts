import { selector } from "recoil";

import { partyPriorityStateAtom } from "./atom";
import partyWithFilters from "./withFilters";

const partyWithPriorities = selector({
  get: ({ get }) => {
    const partyList = [...get(partyWithFilters)];
    const priorityState = get(partyPriorityStateAtom);

    switch (priorityState) {
      case "ASC":
        return partyList.sort((a, b) => a.priority - b.priority);
      case "DESC":
        return partyList.sort((a, b) => b.priority - a.priority);
      default:
        return partyList;
    }
  },
  key: "partyWithPriorities",
});

export default partyWithPriorities;
