import {
  FlexColumnCreator,
  FlexCreator,
  FlexCreatorReturn,
} from "./interfaces";

export const flexCreator: FlexCreator = (alignItems, justifyContent, gap) => {
  const flexCss: FlexCreatorReturn = { display: "flex" };

  if (alignItems) flexCss.alignItems = alignItems;
  if (justifyContent) flexCss.justifyContent = justifyContent;
  if (gap) flexCss.gap = gap;

  return flexCss;
};

export const flexColumnCreator: FlexColumnCreator = (
  alignItems,
  justifyContent,
  gap,
) => {
  const flexCss = flexCreator(alignItems, justifyContent, gap);

  flexCss.flexDirection = "column";

  return flexCss;
};
