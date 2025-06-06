/**
 * @license
 * Copyright 2025 OMICRON Electronics GmbH
 * SPDX-License-Identifier: Apache-2.0
 */
import { OscdTextButton } from "./OscdTextButton";

declare global {
  interface HTMLElementTagNameMap {
    "oscd-text-button": OscdTextButton;
  }
}

customElements.define("oscd-text-button", OscdTextButton);
export { OscdTextButton };
