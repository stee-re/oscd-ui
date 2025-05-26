import { html } from "lit";
import type { Meta, StoryObj } from "@storybook/web-components";

import { OscdSecondaryTab } from "tabs/OscdSecondaryTab";
import { scopedWcDecorator } from "utils/storybook/scopedWcDecorator.js";

const meta: Meta = {
  title: "Open SCD/Tabs/Secondary Tab",
  component: "oscd-secondary-tab",
  tags: ["autodocs"],
  decorators: [scopedWcDecorator],
  parameters: {
    layout: "centered",
    scopedElements: {
      "oscd-secondary-tab": OscdSecondaryTab,
    },
  },
  render: ({ label }) =>
    html`<oscd-secondary-tab>${label}</oscd-secondary-tab>`,
  argTypes: {
    label: {
      control: { type: "text" },
      description: "Tab label",
      table: {
        category: "Web Component Properties",
        defaultValue: { summary: "Tab" },
      },
    },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    label: "Tab",
  },
};
