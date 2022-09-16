import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Layout } from "./Layout";

export default {
  argTypes: {
    color: {
      control: { type: "isShowBottomNavigation" },
      options: [true, false],
    },
  },
  component: Layout,
  title: "Common/Layout",
} as ComponentMeta<typeof Layout>;

const Template: ComponentStory<typeof Layout> = (args) => <Layout {...args} />;

export const layout = Template.bind({});
layout.args = {
  children: (
    <>
      <div>1</div>
      <div>2</div>
      <div>3</div>
    </>
  ),
  isShowBottomNavigation: true,
};
