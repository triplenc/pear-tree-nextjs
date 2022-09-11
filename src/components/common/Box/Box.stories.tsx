import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Box } from ".";

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

export const box = Template.bind({});
box.args = {
  children: (
    <>
      <li>first</li>
      <li>second</li>
    </>
  ),
};
