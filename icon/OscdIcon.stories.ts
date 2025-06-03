import { html } from "lit";
import type { Meta, StoryObj } from "@storybook/web-components";

import { OscdIcon } from "icon/OscdIcon";
import { scopedWcDecorator } from "utils/storybook/scopedWcDecorator.js";

const meta: Meta = {
  title: "Library/Icon",
  component: "oscd-icon",
  tags: ["autodocs"],
  decorators: [scopedWcDecorator],
  parameters: {
    layout: "centered",
    scopedElements: {
      "oscd-icon": OscdIcon,
    },
  },
  render: (args) => {
    const { icon, iconSize, color } = args;
    return html`
      <oscd-icon style="--md-icon-size:${iconSize ?? "40"}px; color:${color}">
        ${icon}</oscd-icon
      >
    `;
  },
  argTypes: {
    icon: {
      control: { type: "text" },
      description: "Icon name",
      table: {
        defaultValue: { summary: "menu" },
      },
    },
    iconSize: {
      control: { type: "number" },
      description: "Icon Size",
      table: {
        defaultValue: { summary: "40" },
      },
    },
    color: {
      control: { type: "color" },
      description: "Icon Color",
      table: {
        defaultValue: { summary: "var(--md-sys-color-primary)" },
      },
    },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    icon: "menu",
    iconSize: "40",
  },
};
