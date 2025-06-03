import { html } from "lit";
import type { Meta, StoryObj } from "@storybook/web-components";

import { OscdMenuItem } from "menu/OscdMenuItem";
import { scopedWcDecorator } from "utils/storybook/scopedWcDecorator.js";
import { OscdElevation } from "elevation/OscdElevation";

const meta: Meta = {
  title: "Library/Menus/Menu Item",
  component: "oscd-menu-item",
  tags: ["autodocs"],
  decorators: [scopedWcDecorator],
  parameters: {
    layout: "centered",
    scopedElements: {
      "oscd-menu-item": OscdMenuItem,
      "oscd-elevation": OscdElevation,
    },
  },
  render: ({ label }) =>
    html`<div style="--md-elevation-level: 5; position: relative;">
      <oscd-menu-item>${label}</oscd-menu-item><oscd-elevation></oscd-elevation>
    </div>`,
  argTypes: {
    label: {
      control: { type: "text" },
      description: "Menu item label",
      table: {
        category: "Web Component Properties",
        defaultValue: { summary: "Option" },
      },
    },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    label: "Option",
  },
};
