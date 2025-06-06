import { OscdIconButton } from "./OscdIconButton";

declare global {
  interface HTMLElementTagNameMap {
    "oscd-icon-button": OscdIconButton;
  }
}

customElements.define("oscd-icon-button", OscdIconButton);
export { OscdIconButton };
