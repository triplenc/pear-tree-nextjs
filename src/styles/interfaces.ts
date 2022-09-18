import { Nullable } from "@types";

export type FlexCommonValue = "flex-start" | "flex-end" | "center" | "stretch";
export type AlignItemsValue = "self-end" | "self-start";
export type JustifyContentValue = "space-around" | "space-between";
export type AlignItems = AlignItemsValue | FlexCommonValue;
export type JustifyContent = JustifyContentValue | FlexCommonValue;
export interface FlexCreatorReturn {
  alignItems?: AlignItems;
  display: "flex";
  flexDirection?: "row" | "column";
  gap?: string;
  justifyContent?: JustifyContent;
}
export interface FlexCreator {
  (
    alignItems?: Nullable<AlignItems>,
    justifyContent?: Nullable<JustifyContent>,
    gap?: string,
  ): FlexCreatorReturn;
}
export interface FlexColumnCreator {
  (
    alignItems?: Nullable<AlignItems>,
    justifyContent?: Nullable<JustifyContent>,
    gap?: string,
  ): FlexCreatorReturn;
}
