import { OscdOutlinedTextField } from "./OscdOutlinedTextField";

declare global {
  interface HTMLElementTagNameMap {
    "oscd-outlined-text-field": OscdOutlinedTextField;
  }
}
customElements.define("oscd-outlined-text-field", OscdOutlinedTextField);
export { OscdOutlinedTextField };
