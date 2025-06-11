import { OscdFilledTonalIconButton } from "./OscdFilledTonalIconButton.js";

declare global {
  interface HTMLElementTagNameMap {
    "oscd-filled-tonal-icon-button": OscdFilledTonalIconButton;
  }
}

customElements.define(
  "oscd-filled-tonal-icon-button",
  OscdFilledTonalIconButton
);
export { OscdFilledTonalIconButton };
