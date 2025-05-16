import { html } from "lit";
import "./oscd-filled-button";

export default {
  title: "Open SCD/Filled Button",
  component: "oscd-filled-button",
};

const Template = () => html`<oscd-filled-button>Click Me</oscd-filled-button>`;

export const Default = Template.bind({});
