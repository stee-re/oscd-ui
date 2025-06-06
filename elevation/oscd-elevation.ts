/**
 * @license
 * Copyright 2025 OMICRON Electronics GmbH
 * SPDX-License-Identifier: Apache-2.0
 */
import { OscdElevation } from "./OscdElevation";

declare global {
  interface HTMLElementTagNameMap {
    "oscd-elevation": OscdElevation;
  }
}

customElements.define("oscd-elevation", OscdElevation);
export { OscdElevation };
