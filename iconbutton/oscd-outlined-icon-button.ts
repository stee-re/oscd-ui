import { OscdOutlinedIconButton } from './OscdOutlinedIconButton.js';

declare global {
  interface HTMLElementTagNameMap {
    'oscd-outlined-icon-button': OscdOutlinedIconButton;
  }
}

customElements.define('oscd-outlined-icon-button', OscdOutlinedIconButton);
export { OscdOutlinedIconButton };
