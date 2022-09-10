import React from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Image } from ".";

export default {
  title: "Common/Image",
  component: Image,
} as ComponentMeta<typeof Image>;

const Template: ComponentStory<typeof Image> = (args) => <Image {...args} />;

export const Row = Template.bind({});
Row.args = {
  alt: "default",
  src: "https://t1.daumcdn.net/cfile/tistory/1653FD374EF0D4C412?download",
};
