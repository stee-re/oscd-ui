import { OscdDialog } from "./OscdDialog.js";

declare global {
  interface HTMLElementTagNameMap {
    "oscd-dialog": OscdDialog;
  }
}

customElements.define("oscd-dialog", OscdDialog);
export { OscdDialog };
