import { atom } from "recoil";

export const partyAtom = atom({
  key: "partyAtom",
  default: [
    {
      name: "party1",
      active: true,
      priority: 1,
    },
  ],
});

export const partyFilterStateAtom = atom({
  key: "partyFilterStateAtom",
  default: "all",
});

export const partyPriorityStateAtom = atom({
  key: "partyPriorityStateAtom",
  default: "DESC",
});
