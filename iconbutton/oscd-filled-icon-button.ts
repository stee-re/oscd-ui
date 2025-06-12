import { OscdFilledIconButton } from './OscdFilledIconButton.js';

declare global {
  interface HTMLElementTagNameMap {
    'oscd-filled-icon-button': OscdFilledIconButton;
  }
}

customElements.define('oscd-filled-icon-button', OscdFilledIconButton);
export { OscdFilledIconButton };
