import { OscdNavigationDrawer } from "./OscdNavigationDrawer";
declare global {
  interface HTMLElementTagNameMap {
    "oscd-navigation-drawer": OscdNavigationDrawer;
  }
}
customElements.define("oscd-navigation-drawer", OscdNavigationDrawer);
export { OscdNavigationDrawer };
