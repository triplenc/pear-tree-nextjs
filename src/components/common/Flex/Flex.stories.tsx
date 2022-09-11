import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Flex } from ".";

export default {
  component: Flex,
  title: "Common/Flex",
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
  children: (
    <>
      <li>first</li>
      <li>second</li>
    </>
  ),
  direction: "column",
};
