import { atom } from "recoil";

export const partyAtom = atom({
  default: [
    {
      active: true,
      name: "party1",
      priority: 1,
    },
  ],
  key: "partyAtom",
});

export const partyFilterStateAtom = atom({
  default: "all",
  key: "partyFilterStateAtom",
});

export const partyPriorityStateAtom = atom({
  default: "DESC",
  key: "partyPriorityStateAtom",
});
