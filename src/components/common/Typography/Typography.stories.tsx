import { Flex } from "@components/common/Flex";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { colors } from "@styles";

import { TypographyStyle } from "./styles";
import { Body1, Body2, Caption, H1, H2, Subtitle1, Subtitle2 } from ".";

export default {
  argTypes: {
    color: {
      control: { type: "select" },
      options: Object.keys(colors),
    },
    type: {
      control: { type: "select" },
      options: [
        "h1",
        "h2",
        "subtitle1",
        "subtitle2",
        "body1",
        "body2",
        "caption",
      ],
    },
  },
  component: TypographyStyle,
  title: "Common/Typography",
} as ComponentMeta<typeof TypographyStyle>;

const Template: ComponentStory<typeof TypographyStyle> = (args) => (
  <Flex direction="column">
    <TypographyStyle {...args}>Test Text</TypographyStyle>
    <H1>H1 Text</H1>
    <H2>H2 Text</H2>
    <Subtitle1>Subtitle1 Text</Subtitle1>
    <Subtitle2>Subtitle2 Text</Subtitle2>
    <Body1>Body1 Text</Body1>
    <Body2>Body2 Text</Body2>
    <Caption>Caption Text</Caption>
  </Flex>
);

export const typography = Template.bind({});
