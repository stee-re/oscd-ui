import "./oscd-navigation-drawer";
import "./oscd-navigation-drawer-header";
import "../app-bar/oscd-app-bar";
import "@material/web/divider/divider.js";
import "@material/web/icon/icon.js";
import "@material/web/list/list.js";
import "@material/web/list/list-item.js";
import "@material/web/iconbutton/icon-button.js";
import "@material/web/icon/icon.js";
import "@material/web/elevation/elevation.js";
import { html } from "lit";
import { useArgs } from "@storybook/preview-api";
import type { Meta, StoryObj } from "@storybook/web-components";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta = {
  title: "Open SCD/Navigation Drawer",
  component: "oscd-navigation-drawer",
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  render: ({ label, opened }) => {
    const [_, updateArgs] = useArgs();

    return html`
      <style>
        oscd-app-bar {
          --oscd-app-bar-background-color: #6c71c4;
          --oscd-app-bar-color: #073642;
        }
      </style>

      <oscd-navigation-drawer ?opened=${opened}>
        <oscd-navigation-drawer-header>
          <div slot="headline">Menu</div>
          <div slot="supporting-text">sample.scd</div>
        </oscd-navigation-drawer-header>
        <md-list>
          <md-list-item type="button"
            ><div slot="headline">Home</div></md-list-item
          >
          <md-list-item type="button"
            ><div slot="headline">Profile</div></md-list-item
          >
          <md-list-item type="button"
            ><div slot="headline">Settings</div></md-list-item
          >
        </md-list>
      </oscd-navigation-drawer>
      <oscd-app-bar>
        <md-icon-button
          slot="actionStart"
          aria-label="Menu"
          @click=${() => updateArgs({ opened: true })}
        >
          <md-icon>menu</md-icon></md-icon-button
        >
        <div slot="title">Navigation Drawer Demo</div>
      </oscd-app-bar>

      <section>
        <p>This is the main content area.</p>
      </section>
    `;
  },
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    opened: false,
  },
};
