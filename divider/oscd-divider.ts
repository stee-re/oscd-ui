import { OscdDivider } from "./OscdDivider.js";

declare global {
  interface HTMLElementTagNameMap {
    "oscd-divider": OscdDivider;
  }
}

customElements.define("oscd-divider", OscdDivider);
export { OscdDivider };
