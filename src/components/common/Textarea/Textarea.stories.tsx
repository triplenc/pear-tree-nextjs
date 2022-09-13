import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Textarea } from "./Textarea";

export default {
  argTypes: {
    color: {
      control: { type: "radio" },
      options: ["gray", "white"],
    },
    size: {
      control: { type: "radio" },
      options: ["tall", "short"],
    },
  },
  component: Textarea,
  title: "Common/Textarea",
} as ComponentMeta<typeof Textarea>;

const Template: ComponentStory<typeof Textarea> = (args) => (
  <Textarea {...args} />
);

export const textarea = Template.bind({});
textarea.args = {
  color: "white",
  placeholder: "텍스트를 입력하세요.",
  size: "tall",
};
