import { OscdTabs } from "./OscdTabs";

declare global {
  interface HTMLElementTagNameMap {
    "oscd-tabs": OscdTabs;
  }
}

customElements.define("oscd-tabs", OscdTabs);
export { OscdTabs };
