import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Divider } from ".";

export default {
  component: Divider,
  title: "Common/Divider",
} as ComponentMeta<typeof Divider>;

const Template: ComponentStory<typeof Divider> = (args) => (
  <Divider {...args}></Divider>
);

export const divider = Template.bind({});
