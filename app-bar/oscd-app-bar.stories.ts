import { html } from "lit";
import type { Meta, StoryObj } from "@storybook/web-components";

import { OscdList } from "list/OscdList";
import { OscdListItem } from "list/OscdListItem";
import { OscdIconButton } from "iconbutton/OscdIconButton";
import { OscdIcon } from "icon/OscdIcon";
import { OscdTabs } from "tabs/OscdTabs";
import { OscdSecondaryTab } from "tabs/OscdSecondaryTab";
import { OscdAppBar } from "./OscdAppBar.js";
import { OscdDivider } from "../divider/OscdDivider.js";
import { scopedWcDecorator } from "utils/storybook/scoped-wc-decorator.js";

const meta: Meta = {
  title: "Open SCD/App Bar",
  component: "oscd-app-bar",
  tags: ["autodocs"],
  decorators: [scopedWcDecorator],
  parameters: {
    layout: "fullscreen",
    scopedElements: {
      "oscd-app-bar": OscdAppBar,
      "oscd-divider": OscdDivider,
      "oscd-icon-button": OscdIconButton,
      "oscd-icon": OscdIcon,
      "oscd-list": OscdList,
      "oscd-list-item": OscdListItem,
      "oscd-tabs": OscdTabs,
      "oscd-secondary-tab": OscdSecondaryTab,
    },
  },
  render: ({
    title,
    "--oscd-app-bar-color": oscdAppBarColor,
    "--oscd-app-bar-background-color": oscdAppBarBackgroundColor,
    "--oscd-app-bar-elevation": oscdAppBarElevation,
    "--oscd-app-bar-shadow-color": oscdAppBarShadowColor,
    "--oscd-app-bar-title-font-family": oscdAppBarTitleFontFamily,
    "--oscd-app-bar-title-font-size": oscdAppBarTitleFontSize,
    "--oscd-app-bar-title-font-weight": oscdAppBarTitleFontWeight,
    "--oscd-app-bar-title-line-height": oscdAppBarTitleLineHeight,
    subHeader,
  }) => {
    return html`
      <style>
        oscd-app-bar {
          --oscd-app-bar-color: ${oscdAppBarColor};
          --oscd-app-bar-background-color: ${oscdAppBarBackgroundColor};
          --oscd-app-bar-elevation: ${oscdAppBarElevation};
          --oscd-app-bar-shadow-color: ${oscdAppBarShadowColor};
          --oscd-app-bar-title-font-family: ${oscdAppBarTitleFontFamily};
          --oscd-app-bar-title-font-size: ${oscdAppBarTitleFontSize};
          --oscd-app-bar-title-font-weight: ${oscdAppBarTitleFontWeight};
          --oscd-app-bar-title-line-height: ${oscdAppBarTitleLineHeight};
        }
      </style>
      <oscd-app-bar>
        <oscd-icon-button
          slot="actionStart"
          aria-label="Menu"
          @click=${() => console.log("actionStart clicked")}
        >
          <oscd-icon>menu</oscd-icon></oscd-icon-button
        >
        <div slot="title">${title}</div>
        <oscd-icon-button
          slot="actionEnd"
          aria-label="Menu"
          @click=${() => console.log("actionStart clicked")}
        >
          <oscd-icon>more_vert</oscd-icon></oscd-icon-button
        >
        ${subHeader && subHeader()}
      </oscd-app-bar>
    `;
  },
  argTypes: {
    title: {
      control: { type: "text" },
      description: "App Bar Title",
      table: {
        category: "Web Component Properties",
        defaultValue: { summary: "" },
      },
    },
    "--oscd-app-bar-color": {
      control: { type: "color" },
      description: "App Bar Text Color",
      table: {
        category: "CSS Variables",
        defaultValue: { summary: "var(--md-sys-color-on-surface, #073642)" },
      },
    },
    "--oscd-app-bar-background-color": {
      control: { type: "color" },
      description: "App Bar Text Background Color",
      table: {
        category: "CSS Variables",
        defaultValue: { summary: "var(--md-sys-color-on-surface, #6c71c4)" },
      },
    },
    "--oscd-app-bar-elevation": {
      control: { type: "number" },
      description: "App Bar Elevation Level",
      table: { category: "CSS Variables", defaultValue: { summary: "2" } },
    },
    "--oscd-app-bar-shadow-color": {
      control: { type: "color" },
      description: "App Bar Shadow Color",
      table: {
        category: "CSS Variables",
        defaultValue: { summary: "var(--md-sys-color-on-surface, #000)" },
      },
    },
    "--oscd-app-bar-title-font-family": {
      control: { type: "text" },
      description: "App Bar title text font family",
      table: {
        category: "CSS Variables",
        defaultValue: {
          summary: "var(--md-sys-typescale-body-large-font, Roboto)",
        },
      },
    },
    "--oscd-app-bar-title-font-size": {
      control: { type: "text" },
      description: "App Bar title text Size",
      table: {
        category: "CSS Variables",
        defaultValue: {
          summary: "var(--md-sys-typescale-body-large-size, 1rem)",
        },
      },
    },
    "--oscd-app-bar-title-line-height": {
      control: { type: "text" },
      description: "App Bar title text Line Height",
      table: {
        category: "CSS Variables",
        defaultValue: {
          summary: "var(--md-sys-typescale-body-large-line-height, 1.5rem)",
        },
      },
    },
    "--oscd-app-bar-title-font-weight": {
      control: { type: "text" },
      description: "App Bar title text Weight",
      table: {
        category: "CSS Variables",
        defaultValue: {
          summary:
            "var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400))",
        },
      },
    },
  },
};

export default meta;
type Story = StoryObj;

const defaultArgs = Object.entries(meta.argTypes ?? {}).reduce(
  (acc, [key, value]) => {
    return {
      ...acc,
      [key]: value?.table?.defaultValue?.summary,
    };
  },
  {}
);

export const Default: Story = {
  args: {
    ...defaultArgs,
    title: "My App Bar",
  },
};

export const WithSubHeader: Story = {
  args: {
    ...defaultArgs,
    title: "My App Bar (with subheader)",
    subHeader: () => html`
      <oscd-tabs>
        <oscd-secondary-tab>Video</oscd-secondary-tab>
        <oscd-secondary-tab>Photos</oscd-secondary-tab>
        <oscd-secondary-tab>Audio</oscd-secondary-tab>
      </oscd-tabs>
    `,
  },
};
