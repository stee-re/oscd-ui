import { OscdSelectOption } from './OscdSelectOption.js';

declare global {
  interface HTMLElementTagNameMap {
    'oscd-select-option': OscdSelectOption;
  }
}

customElements.define('oscd-select-option', OscdSelectOption);
export { OscdSelectOption };
