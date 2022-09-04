import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Flex } from "./";

export default {
  title: "Common/Flex",
  component: Flex,
} as ComponentMeta<typeof Flex>;

const Template: ComponentStory<typeof Flex> = (args) => <Flex {...args} />;

export const Row = Template.bind({});
Row.args = {
  children: (
    <>
      <li>first</li>
      <li>second</li>
    </>
  ),
};

export const Column = Template.bind({});
Column.args = {
  direction: "column",
  children: (
    <>
      <li>first</li>
      <li>second</li>
    </>
  ),
};
