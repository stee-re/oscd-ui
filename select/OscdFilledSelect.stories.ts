import { html } from "lit";
import type { Meta, StoryObj } from "@storybook/web-components";

import { OscdFilledSelect } from "select/OscdFilledSelect";
import { OscdSelectOption } from "select/OscdSelectOption";
import { scopedWcDecorator } from "utils/storybook/scopedWcDecorator.js";

const meta: Meta = {
  title: "Open SCD/Selects/Filled Select",
  component: "oscd-filled-select",
  tags: ["autodocs"],
  decorators: [scopedWcDecorator],
  parameters: {
    layout: "centered",
    scopedElements: {
      "oscd-filled-select": OscdFilledSelect,
      "oscd-select-option": OscdSelectOption,
    },
  },
  render: () => html`
    <oscd-filled-select label="Choose one">
      <oscd-select-option value="1">Option 1</oscd-select-option>
      <oscd-select-option value="2">Option 2</oscd-select-option>
    </oscd-filled-select>
  `,
  argTypes: {},
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {},
};
