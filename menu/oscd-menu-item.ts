import { OscdMenuItem } from './OscdMenuItem.js';

declare global {
  interface HTMLElementTagNameMap {
    'oscd-menu-item': OscdMenuItem;
  }
}

customElements.define('oscd-menu-item', OscdMenuItem);
export { OscdMenuItem };
