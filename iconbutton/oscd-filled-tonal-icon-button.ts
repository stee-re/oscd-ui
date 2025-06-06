import { OscdFilledTonalIconButton } from "./OscdFilledTonalIconButton";

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
