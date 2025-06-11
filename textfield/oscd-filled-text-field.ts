import { OscdFilledTextField } from "./OscdFilledTextField.js";

declare global {
  interface HTMLElementTagNameMap {
    "oscd-filled-text-field": OscdFilledTextField;
  }
}

customElements.define("oscd-filled-text-field", OscdFilledTextField);
export { OscdFilledTextField };
