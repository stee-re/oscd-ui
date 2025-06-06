import { OscdIcon } from "./OscdIcon";

declare global {
  interface HTMLElementTagNameMap {
    "oscd-icon": OscdIcon;
  }
}

customElements.define("oscd-icon", OscdIcon);
export { OscdIcon };
