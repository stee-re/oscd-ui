import type { Meta, StoryObj } from "@storybook/web-components";

import { OscdIconButton } from "iconbutton/OscdIconButton";
import { OscdIcon } from "icon/OscdIcon";
import { scopedWcDecorator } from "utils/storybook/scopedWcDecorator.js";
import { html as staticHtml, unsafeStatic } from "lit/static-html.js";
import { OscdFilledIconButton } from "./OscdFilledIconButton";
import { OscdOutlinedIconButton } from "./OutlinedIconButton";

const meta: Meta = {
  title: "Open SCD/Icon Buttons",
  component: "oscd-icon-button",
  tags: ["autodocs"],
  decorators: [scopedWcDecorator],
  parameters: {
    layout: "centered",
    scopedElements: {
      "oscd-icon-button": OscdIconButton,
      "oscd-filled-icon-button": OscdFilledIconButton,
      "oscd-outlined-icon-button": OscdOutlinedIconButton,
      "oscd-icon": OscdIcon,
    },
  },
  render: ({ icon, disabled, selected, toggle, selectedIcon }, { globals }) => {
    const { component } = globals;
    return staticHtml`<${unsafeStatic(component)} 
      ?disabled=${disabled}
      ?selected=${selected}
      ?toggle=${toggle}
      @click=${() => console.log("Clicked!")}>
        <oscd-icon>${icon}</oscd-icon>
        <oscd-icon slot="selected">${selectedIcon}</oscd-icon>
      </${unsafeStatic(component)}>`;
  },

  argTypes: {
    icon: {
      control: { type: "text" },
      description: "Icon name",
      table: {
        category: "Web Component Properties",
        defaultValue: { summary: "menu" },
      },
    },
    selectedIcon: {
      control: { type: "text" },
      description: "Icon name",
      table: {
        category: "Web Component Properties",
        defaultValue: { summary: "menu" },
      },
    },
    disabled: {
      control: { type: "boolean" },
      description: "Disabled",
      table: {
        category: "Web Component Properties",
        defaultValue: { summary: "false" },
      },
    },
    selected: {
      control: { type: "boolean" },
      description: "Selected",
      table: {
        category: "Web Component Properties",
        defaultValue: { summary: "false" },
      },
    },
    toggle: {
      control: { type: "boolean" },
      description: "Toggle",
      table: {
        category: "Web Component Properties",
        defaultValue: { summary: "false" },
      },
    },
  },
};

export default meta;
type Story = StoryObj;

const args = {
  icon: "light_mode",
  selectedIcon: "dark_mode",
  disabled: false,
  selected: false,
  toggle: false,
};

export const IconButton: Story = {
  args,
  globals: {
    component: "oscd-icon-button",
  },
};

export const FilledIconButton: Story = {
  args,
  globals: {
    component: "oscd-filled-icon-button",
  },
};

export const OutlinedIconButton: Story = {
  args,
  globals: {
    component: "oscd-outlined-icon-button",
  },
};
