import { OscdMenu } from './OscdMenu.js';

declare global {
  interface HTMLElementTagNameMap {
    'oscd-menu': OscdMenu;
  }
}

customElements.define('oscd-menu', OscdMenu);
export { OscdMenu };
