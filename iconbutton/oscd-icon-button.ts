import { OscdIconButton } from "./OscdIconButton.js";

declare global {
  interface HTMLElementTagNameMap {
    "oscd-icon-button": OscdIconButton;
  }
}

customElements.define("oscd-icon-button", OscdIconButton);
export { OscdIconButton };
