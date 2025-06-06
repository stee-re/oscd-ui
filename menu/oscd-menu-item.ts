import { OscdMenuItem } from "./OscdMenuItem";

declare global {
  interface HTMLElementTagNameMap {
    "oscd-menu-item": OscdMenuItem;
  }
}

customElements.define("oscd-menu-item", OscdMenuItem);
export { OscdMenuItem };
