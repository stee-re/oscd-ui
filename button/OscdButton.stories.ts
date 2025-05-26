import { html } from "lit";
import type { Meta, StoryObj } from "@storybook/web-components";

import { OscdTextButton } from "button/OscdTextButton";
import { scopedWcDecorator } from "utils/storybook/scopedWcDecorator.js";
import { OscdFilledButton } from "./OscdFilledButton";
import { OscdOutlinedButton } from "./OscdOutlinedButton";

const meta: Meta = {
  title: "Open SCD/Buttons",
  tags: ["autodocs"],
  decorators: [scopedWcDecorator],
  parameters: {
    layout: "centered",
    scopedElements: {
      "oscd-filled-button": OscdFilledButton,
      "oscd-outlined-button": OscdOutlinedButton,
      "oscd-text-button": OscdTextButton,
    },
  },
  argTypes: {
    label: {
      control: { type: "text" },
      description: "Button label",
      table: {
        category: "Web Component Properties",
        defaultValue: { summary: "Click Me" },
      },
    },
  },
};

export default meta;
type Story = StoryObj;

export const FilledButton: Story = {
  args: {
    label: "Filled Button",
  },
  render: ({ label }) => html`
    <oscd-filled-button @click=${() => console.log("Clicked!")}>
      ${label}
    </oscd-filled-button>
  `,
};

export const OutlinedButton: Story = {
  args: {
    label: "Outlined Button",
  },
  render: ({ label }) => html`
    <oscd-outlined-button @click=${() => console.log("Clicked!")}>
      ${label}
    </oscd-outlined-button>
  `,
};

export const TextButton: Story = {
  args: {
    label: "Text Button",
  },
  render: ({ label }) => html`
    <oscd-text-button @click=${() => console.log("Clicked!")}>
      ${label}
    </oscd-text-button>
  `,
};
