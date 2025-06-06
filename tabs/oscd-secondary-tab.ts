import { OscdSecondaryTab } from "./OscdSecondaryTab";

declare global {
  interface HTMLElementTagNameMap {
    "oscd-secondary-tab": OscdSecondaryTab;
  }
}

customElements.define("oscd-secondary-tab", OscdSecondaryTab);
export { OscdSecondaryTab };
