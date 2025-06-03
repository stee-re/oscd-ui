import { html } from "lit";
import type { Meta, StoryObj } from "@storybook/web-components";

import { OscdOutlinedSelect } from "select/OscdOutlinedSelect";
import { OscdSelectOption } from "select/OscdSelectOption";
import { scopedWcDecorator } from "utils/storybook/scopedWcDecorator.js";

const meta: Meta = {
  title: "Library/Selects/Outlined Select",
  component: "oscd-outlined-select",
  tags: ["autodocs"],
  decorators: [scopedWcDecorator],
  parameters: {
    layout: "centered",
    scopedElements: {
      "oscd-outlined-select": OscdOutlinedSelect,
      "oscd-select-option": OscdSelectOption,
    },
  },
  render: () => html`
    <oscd-outlined-select label="Choose one">
      <oscd-select-option value="1">Option 1</oscd-select-option>
      <oscd-select-option value="2">Option 2</oscd-select-option>
    </oscd-outlined-select>
  `,
  argTypes: {},
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {},
};
