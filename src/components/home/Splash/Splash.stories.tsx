import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Splash } from ".";

export default {
  component: Splash,
  title: "Home/Splash",
} as ComponentMeta<typeof Splash>;

const Template: ComponentStory<typeof Splash> = () => <Splash />;

export const splash = Template.bind({});
