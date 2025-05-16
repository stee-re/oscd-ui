/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * Copyright 2025 OMICRON Electronics GmbH
 * SPDX-License-Identifier: Apache-2.0
 */
import { CSSResultOrNative } from "lit";
import { customElement } from "lit/decorators.js";

import { OutlinedField } from "@material/web/field/internal/outlined-field.js";
import { styles as outlinedStyles } from "@material/web/field/internal/outlined-styles.js";
import { styles as sharedStyles } from "@material/web/field/internal/shared-styles.js";

declare global {
  interface HTMLElementTagNameMap {
    "oscd-outlined-field": OscdOutlinedField;
  }
}

/**
 * @final
 * @suppress {visibility}
 */
@customElement("oscd-outlined-field")
export class OscdOutlinedField extends OutlinedField {
  static override styles: CSSResultOrNative[] = [sharedStyles, outlinedStyles];
}
