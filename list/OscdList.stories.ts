import { html } from "lit";
import type { Meta, StoryObj } from "@storybook/web-components";

import { OscdList } from "list/OscdList";
import { OscdListItem } from "list/OscdListItem";
import { scopedWcDecorator } from "utils/storybook/scopedWcDecorator.js";

const meta: Meta = {
  title: "Open SCD/Lists",
  component: "oscd-list",
  // tags: ["autodocs"],
  decorators: [scopedWcDecorator],
  parameters: {
    layout: "centered",
    scopedElements: {
      "oscd-list": OscdList,
      "oscd-list-item": OscdListItem,
    },
  },
  render: () => html`
    <oscd-list>
      <oscd-list-item>Item 1</oscd-list-item>
      <oscd-list-item>Item 2</oscd-list-item>
      <oscd-list-item>Item 3</oscd-list-item>
    </oscd-list>
  `,
  argTypes: {},
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {},
};
