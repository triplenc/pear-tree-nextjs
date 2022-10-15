import { atom } from "jotai";

import { Category, Nullable } from "@types";

export const selectedCategoryAtom = atom<Nullable<Category>>(null);
