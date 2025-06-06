import { OscdSelectOption } from "./OscdSelectOption";

declare global {
  interface HTMLElementTagNameMap {
    "oscd-select-option": OscdSelectOption;
  }
}

customElements.define("oscd-select-option", OscdSelectOption);
export { OscdSelectOption };
