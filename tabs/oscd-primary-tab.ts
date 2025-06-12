import { OscdPrimaryTab } from './OscdPrimaryTab.js';

declare global {
  interface HTMLElementTagNameMap {
    'oscd-primary-tab': OscdPrimaryTab;
  }
}

customElements.define('oscd-primary-tab', OscdPrimaryTab);
export { OscdPrimaryTab };
