import { OscdOutlinedSelect } from "./OscdOutlinedSelect";

declare global {
  interface HTMLElementTagNameMap {
    "oscd-outlined-select": OscdOutlinedSelect;
  }
}

customElements.define("oscd-outlined-select", OscdOutlinedSelect);
export { OscdOutlinedSelect };
