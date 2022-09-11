import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Input } from "./styles";

export default {
  title: "Common/Input",
  component: Input,
  argTypes: {
    color: {
      options: ["gray", "error", "primary"],
      control: { type: "radio" },
    },
    type: {
      options: ["full", "half", "fit"],
      control: { type: "radio" },
    },
    fatBorder: {
      options: [true, false],
      control: { type: "radio" },
    },
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const input = Template.bind({});
input.args = {
  placeholder: "텍스트를 입력하세요.",
  color: "gray",
  type: "full",
};
