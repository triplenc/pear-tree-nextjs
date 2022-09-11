import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Input } from "./styles";

export default {
  argTypes: {
    color: {
      control: { type: "radio" },
      options: ["gray", "error", "primary"],
    },
    fatBorder: {
      control: { type: "radio" },
      options: [true, false],
    },
    type: {
      control: { type: "radio" },
      options: ["full", "half", "fit"],
    },
  },
  component: Input,
  title: "Common/Input",
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const input = Template.bind({});
input.args = {
  color: "gray",
  placeholder: "텍스트를 입력하세요.",
  type: "full",
};
