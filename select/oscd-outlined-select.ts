import { OscdOutlinedSelect } from "./OscdOutlinedSelect.js";

declare global {
  interface HTMLElementTagNameMap {
    "oscd-outlined-select": OscdOutlinedSelect;
  }
}

customElements.define("oscd-outlined-select", OscdOutlinedSelect);
export { OscdOutlinedSelect };
