import { OscdNavigationDrawer } from './OscdNavigationDrawer.js';

declare global {
  interface HTMLElementTagNameMap {
    'oscd-navigation-drawer': OscdNavigationDrawer;
  }
}
customElements.define('oscd-navigation-drawer', OscdNavigationDrawer);
export { OscdNavigationDrawer };
