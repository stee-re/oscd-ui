import { html } from "lit";
import type { Meta, StoryObj } from "@storybook/web-components";

import { OscdTabs } from "tabs/OscdTabs";
import { OscdPrimaryTab } from "tabs/OscdPrimaryTab";
import { scopedWcDecorator } from "utils/storybook/scopedWcDecorator.js";

const meta: Meta = {
  title: "Library/Tabs/Tabs",
  component: "oscd-tabs",
  tags: ["autodocs"],
  decorators: [scopedWcDecorator],
  parameters: {
    layout: "centered",
    scopedElements: {
      "oscd-tabs": OscdTabs,
      "oscd-primary-tab": OscdPrimaryTab,
    },
  },
  render: () => html`
    <oscd-tabs>
      <oscd-primary-tab>Tab 1</oscd-primary-tab>
      <oscd-primary-tab>Tab 2</oscd-primary-tab>
    </oscd-tabs>
  `,
  argTypes: {},
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {},
};
