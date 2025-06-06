import { html } from "lit";
import type { Meta, StoryObj } from "@storybook/web-components";
import { OscdListItem } from "list/OscdListItem";
import { OscdElevation } from "elevation/OscdElevation";
import { withActions } from "@storybook/addon-actions/decorator";
import { scopedWcDecorator } from "utils/storybook/scopedWcDecorator.js";
import {
  getStorybookHelpers,
  storybookHelperDecorator,
} from "utils/storybook/getStorybookHelpers.js";

const { args, argTypes, template, events } =
  getStorybookHelpers("oscd-list-item");

const meta: Meta<OscdListItem & { textContent: string }> = {
  title: "Library/List/List Item",
  component: "oscd-list-item",
  tags: ["autodocs"],
  decorators: [withActions, scopedWcDecorator, storybookHelperDecorator],
  parameters: {
    layout: "centered",
    scopedElements: {
      "oscd-list-item": OscdListItem,
      "oscd-elevation": OscdElevation,
    },
    actions: {
      handles: ["click", ...events],
    },
  },
  render: (args) => html`
    <div style="position: relative;--md-elevation-level: 2;">
      ${template(args, html`${args["textContent"]}`)}
      <oscd-elevation></oscd-elevation>
    </div>
  `,
  argTypes: {
    textContent: {
      control: { type: "text" },
      description: "List item text content",
      name: "Text Content",
    },
    ...argTypes,
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    ...args,
    textContent: "List Item",
  },
};
