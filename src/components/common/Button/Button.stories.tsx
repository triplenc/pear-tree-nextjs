import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Button } from ".";

export default {
  title: "Common/Button",
  component: Button,
  argTypes: {
    type: {
      options: ["primary", "gray", "outlinePrimary", "outlineGray"],
      control: { type: "select" },
    },
    size: {
      options: ["large", "medium", "small"],
      control: { type: "radio" },
    },
    height: {
      options: ["tall", "normal"],
      control: { type: "radio" },
    },
    disabled: {
      options: [true, false],
      control: { type: "radio" },
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>{args.children}</Button>
);

export const button = Template.bind({});
button.args = {
  children: "사진 업로드",
};
