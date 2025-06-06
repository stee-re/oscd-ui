import { OscdPrimaryTab } from "./OscdPrimaryTab";

declare global {
  interface HTMLElementTagNameMap {
    "oscd-primary-tab": OscdPrimaryTab;
  }
}

customElements.define("oscd-primary-tab", OscdPrimaryTab);
export { OscdPrimaryTab };
