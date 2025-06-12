import { OscdList } from './OscdList.js';

declare global {
  interface HTMLElementTagNameMap {
    'oscd-list': OscdList;
  }
}

customElements.define('oscd-list', OscdList);
export { OscdList };
