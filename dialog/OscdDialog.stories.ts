import { html } from "lit";
import type { Meta, StoryObj } from "@storybook/web-components";

import { OscdDialog } from "dialog/OscdDialog";
import { OscdFilledButton } from "button/OscdFilledButton";
import { scopedWcDecorator } from "utils/storybook/scopedWcDecorator.js";
import { useArgs } from "@storybook/preview-api";

const meta: Meta = {
  title: "Library/Dialog",
  component: "oscd-dialog",
  tags: ["autodocs"],
  decorators: [scopedWcDecorator],
  parameters: {
    layout: "centered",
    scopedElements: {
      "oscd-dialog": OscdDialog,
      "oscd-filled-button": OscdFilledButton,
    },
  },
  render: (args) => {
    const [_, updateArgs] = useArgs();
    return html`
      <oscd-filled-button
        @click=${(event: Event) => {
          updateArgs({ open: true });
        }}
        >Open Dialog</oscd-filled-button
      >
      <oscd-dialog
        ?open=${args["open"]}
        @closed=${(event: CustomEvent) => {
          updateArgs({ open: false });
        }}
      >
        <div slot="headline">Confirm Action</div>
        <div slot="content">
          Are you sure you want to proceed with this operation? This action
          cannot be undone.
        </div>
        <div slot="actions">
          <oscd-filled-button @click=${() => updateArgs({ open: false })}
            >Cancel</oscd-filled-button
          >
          <oscd-filled-button @click=${() => updateArgs({ open: false })}
            >Confirm</oscd-filled-button
          >
        </div>
      </oscd-dialog>
    `;
  },
  argTypes: {
    open: {
      control: { type: "boolean" },
      description: "Defines whether the dialog is open or closed.",
      table: {
        defaultValue: { summary: "true" },
      },
    },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    open: false,
  },
};
