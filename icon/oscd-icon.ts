import { OscdIcon } from './OscdIcon.js';

declare global {
  interface HTMLElementTagNameMap {
    'oscd-icon': OscdIcon;
  }
}

customElements.define('oscd-icon', OscdIcon);
export { OscdIcon };
