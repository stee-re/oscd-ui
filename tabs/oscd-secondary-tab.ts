import { OscdSecondaryTab } from './OscdSecondaryTab.js';

declare global {
  interface HTMLElementTagNameMap {
    'oscd-secondary-tab': OscdSecondaryTab;
  }
}

customElements.define('oscd-secondary-tab', OscdSecondaryTab);
export { OscdSecondaryTab };
