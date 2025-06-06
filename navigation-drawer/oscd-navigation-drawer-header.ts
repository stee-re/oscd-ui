import { OscdNavigationDrawerHeader } from "./OscdNavigationDrawerHeader";

declare global {
  interface HTMLElementTagNameMap {
    "oscd-navigation-drawer-header": OscdNavigationDrawerHeader;
  }
}

customElements.define(
  "oscd-navigation-drawer-header",
  OscdNavigationDrawerHeader
);
export { OscdNavigationDrawerHeader };
