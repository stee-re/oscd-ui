import { OscdOutlinedField } from './OscdOutlinedField.js';

declare global {
  interface HTMLElementTagNameMap {
    'oscd-outlined-field': OscdOutlinedField;
  }
}

customElements.define('oscd-outlined-field', OscdOutlinedField);
export { OscdOutlinedField };
