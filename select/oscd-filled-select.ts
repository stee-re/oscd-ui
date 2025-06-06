import { OscdFilledSelect } from "./OscdFilledSelect";

declare global {
  interface HTMLElementTagNameMap {
    "oscd-filled-select": OscdFilledSelect;
  }
}

customElements.define("oscd-filled-select", OscdFilledSelect);
export { OscdFilledSelect };
