import { OscdTabs } from './OscdTabs.js';

declare global {
  interface HTMLElementTagNameMap {
    'oscd-tabs': OscdTabs;
  }
}

customElements.define('oscd-tabs', OscdTabs);
export { OscdTabs };
