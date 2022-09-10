import React from "react";

import { Box } from "@components/common";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Common/Box",
  component: Box,
  argTypes: {
    as: {
      options: ["ol", "ul", "li", "article", "section", "aside"],
      control: { type: "select" },
    },
  },
} as ComponentMeta<typeof Box>;

const Template: ComponentStory<typeof Box> = (args) => <Box {...args} />;

export const Row = Template.bind({});
Row.args = {
  children: (
    <>
      <li>first</li>
      <li>second</li>
    </>
  ),
};
