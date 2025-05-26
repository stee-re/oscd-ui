import { html } from "lit";
import type { Meta, StoryObj } from "@storybook/web-components";

import { OscdPrimaryTab } from "tabs/OscdPrimaryTab";
import { scopedWcDecorator } from "utils/storybook/scopedWcDecorator.js";

const meta: Meta = {
  title: "Open SCD/Tabs/Primary Tab",
  component: "oscd-primary-tab",
  tags: ["autodocs"],
  decorators: [scopedWcDecorator],
  parameters: {
    layout: "centered",
    scopedElements: {
      "oscd-primary-tab": OscdPrimaryTab,
    },
  },
  render: ({ label }) => html`<oscd-primary-tab>${label}</oscd-primary-tab>`,
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
