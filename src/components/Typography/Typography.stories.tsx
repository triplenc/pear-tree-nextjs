import { Flex } from "@components/Flex";
import { colors } from "@components/stitches.config";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Body1, Body2, Caption, H1, H2, Subtitle1, Subtitle2 } from ".";
import { TypographyStyle } from "./styles";

export default {
  title: "Common/Typography",
  component: TypographyStyle,
  argTypes: {
    type: {
      options: [
        "h1",
        "h2",
        "subtitle1",
        "subtitle2",
        "body1",
        "body2",
        "caption",
      ],
      control: { type: "select" },
    },
    color: {
      options: Object.keys(colors),
      control: { type: "select" },
    },
  },
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

export const Typos = Template.bind({});
