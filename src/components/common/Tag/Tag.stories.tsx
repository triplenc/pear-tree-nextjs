import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Tag } from ".";

export default {
  component: Tag,
  title: "Common/Tag",
} as ComponentMeta<typeof Tag>;

const Template: ComponentStory<typeof Tag> = (args) => <Tag {...args}></Tag>;

export const tag = Template.bind({});
tag.args = {
  active: true,
  children: "전체보기",
};
