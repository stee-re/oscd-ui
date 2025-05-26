import { html } from "lit";
import type { Meta, StoryObj } from "@storybook/web-components";

import { OscdMenu } from "menu/OscdMenu";
import { OscdMenuItem } from "menu/OscdMenuItem";
import { scopedWcDecorator } from "utils/storybook/scopedWcDecorator.js";

const meta: Meta = {
  title: "Open SCD/Menus/Menu",
  component: "oscd-menu",
  tags: ["autodocs"],
  decorators: [scopedWcDecorator],
  parameters: {
    layout: "centered",
    scopedElements: {
      "oscd-menu": OscdMenu,
      "oscd-menu-item": OscdMenuItem,
    },
  },
  render: () => html`
    <oscd-menu open>
      <oscd-menu-item value="1">Option 1</oscd-menu-item>
      <oscd-menu-item value="2">Option 2</oscd-menu-item>
    </oscd-menu>
  `,
  argTypes: {},
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {},
};
