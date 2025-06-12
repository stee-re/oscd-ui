import { OscdFilledField } from './OscdFilledField.js';

declare global {
  interface HTMLElementTagNameMap {
    'oscd-filled-field': OscdFilledField;
  }
}

customElements.define('oscd-filled-field', OscdFilledField);
export { OscdFilledField };
