import { OscdOutlinedTextField } from "./OscdOutlinedTextField.js";

declare global {
  interface HTMLElementTagNameMap {
    "oscd-outlined-text-field": OscdOutlinedTextField;
  }
}
customElements.define("oscd-outlined-text-field", OscdOutlinedTextField);
export { OscdOutlinedTextField };
