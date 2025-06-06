import { OscdOutlinedField } from "./OscdOutlinedField";

declare global {
  interface HTMLElementTagNameMap {
    "oscd-outlined-field": OscdOutlinedField;
  }
}

customElements.define("oscd-outlined-field", OscdOutlinedField);
export { OscdOutlinedField };
