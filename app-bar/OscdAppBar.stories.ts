import { html, TemplateResult } from "lit";
import type { Meta, StoryObj } from "@storybook/web-components";

import { OscdAppBar } from "./OscdAppBar.js";
import { OscdList } from "list/OscdList";
import { OscdListItem } from "list/OscdListItem";
import { OscdIcon } from "icon/OscdIcon";
import { OscdTabs } from "tabs/OscdTabs";
import { OscdSecondaryTab } from "tabs/OscdSecondaryTab";
import { OscdDivider } from "../divider/OscdDivider.js";
import { scopedWcDecorator } from "utils/storybook/scopedWcDecorator.js";
import { OscdFilledIconButton } from "iconbutton/OscdFilledIconButton.js";
import {
  getStorybookHelpers,
  storybookHelperDecorator,
} from "utils/storybook/getStorybookHelpers.js";

const { args, argTypes } = getStorybookHelpers("oscd-app-bar");

const meta: Meta<OscdAppBar & { subHeader: () => TemplateResult }> = {
  title: "Open SCD/App Bar",
  component: "oscd-app-bar",
  tags: ["autodocs"],
  decorators: [scopedWcDecorator, storybookHelperDecorator],

  args,
  parameters: {
    layout: "fullscreen",
    scopedElements: {
      "oscd-app-bar": OscdAppBar,
      "oscd-divider": OscdDivider,
      "oscd-filled-icon-button": OscdFilledIconButton,
      "oscd-icon": OscdIcon,
      "oscd-list": OscdList,
      "oscd-list-item": OscdListItem,
      "oscd-tabs": OscdTabs,
      "oscd-secondary-tab": OscdSecondaryTab,
    },
  },
  render: ({ title, subHeader, ...rest }) => {
    console.log("args", rest);
    return html`
      <oscd-app-bar>
        <oscd-filled-icon-button
          slot="actionStart"
          aria-label="Menu"
          @click=${() => console.log("actionStart clicked")}
        >
          <oscd-icon>menu</oscd-icon></oscd-filled-icon-button
        >
        <div slot="title">${title}</div>
        <oscd-filled-icon-button
          slot="actionEnd"
          aria-label="Menu"
          @click=${() => console.log("actionStart clicked")}
        >
          <oscd-icon>more_vert</oscd-icon></oscd-filled-icon-button
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
    ...argTypes,
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    title: "My App Bar",
  },
};

export const WithSubHeader: Story = {
  args: {
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
