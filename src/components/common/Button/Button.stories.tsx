import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Button } from ".";

export default {
  argTypes: {
    disabled: {
      control: { type: "radio" },
      options: [true, false],
    },
    height: {
      control: { type: "radio" },
      options: ["tall", "normal"],
    },
    size: {
      control: { type: "radio" },
      options: ["large", "medium", "small"],
    },
    type: {
      control: { type: "select" },
      options: ["primary", "gray", "outlinePrimary", "outlineGray"],
    },
  },
  component: Button,
  title: "Common/Button",
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>{args.children}</Button>
);

export const button = Template.bind({});
button.args = {
  children: "사진 업로드",
};
