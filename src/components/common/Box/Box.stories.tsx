import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Box } from ".";

export default {
  argTypes: {
    as: {
      control: { type: "select" },
      options: ["ol", "ul", "li", "article", "section", "aside"],
    },
  },
  component: Box,
  title: "Common/Box",
} as ComponentMeta<typeof Box>;

const Template: ComponentStory<typeof Box> = (args) => <Box {...args} />;

export const box = Template.bind({});
box.args = {
  children: (
    <>
      <li>first</li>
      <li>second</li>
    </>
  ),
};
