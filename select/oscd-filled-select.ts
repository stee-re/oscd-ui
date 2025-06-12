import { OscdFilledSelect } from './OscdFilledSelect.js';

declare global {
  interface HTMLElementTagNameMap {
    'oscd-filled-select': OscdFilledSelect;
  }
}

customElements.define('oscd-filled-select', OscdFilledSelect);
export { OscdFilledSelect };
