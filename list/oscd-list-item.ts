import { OscdListItem } from './OscdListItem.js';

declare global {
  interface HTMLElementTagNameMap {
    'oscd-list-item': OscdListItem;
  }
}

customElements.define('oscd-list-item', OscdListItem);
export { OscdListItem };
