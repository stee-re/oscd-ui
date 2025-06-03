import { html } from "lit";
import type { Meta, StoryObj } from "@storybook/web-components";

import { OscdNavigationDrawerHeader } from "navigation-drawer/OscdNavigationDrawerHeader";
import { scopedWcDecorator } from "utils/storybook/scopedWcDecorator.js";

const meta: Meta = {
  title: "Library/Navigation Drawer/Navigation Drawer Header",
  component: "oscd-navigation-drawer-header",
  tags: ["autodocs"],
  decorators: [scopedWcDecorator],
  parameters: {
    layout: "centered",
    scopedElements: {
      "oscd-navigation-drawer-header": OscdNavigationDrawerHeader,
    },
  },
  render: ({ label }) => html`
    <oscd-navigation-drawer-header>${label}</oscd-navigation-drawer-header>
  `,
  argTypes: {
    label: {
      control: { type: "text" },
      description: "Header label",
      table: {
        category: "Web Component Properties",
        defaultValue: { summary: "Navigation" },
      },
    },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    label: "Navigation",
  },
};
