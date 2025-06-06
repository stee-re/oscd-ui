import { OscdList } from "./OscdList";

declare global {
  interface HTMLElementTagNameMap {
    "oscd-list": OscdList;
  }
}

customElements.define("oscd-list", OscdList);
export { OscdList };
