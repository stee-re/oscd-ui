import { OscdFilledButton } from "./OscdFilledButton";

declare global {
  interface HTMLElementTagNameMap {
    "oscd-filled-button": OscdFilledButton;
  }
}

customElements.define("oscd-filled-button", OscdFilledButton);
export { OscdFilledButton };
