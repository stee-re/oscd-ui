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
import { FilledField } from "@material/web/field/internal/filled-field.js";
import { styles as filledStyles } from "@material/web/field/internal/filled-styles.js";
import { styles as sharedStyles } from "@material/web/field/internal/shared-styles.js";

declare global {
  interface HTMLElementTagNameMap {
    "oscd-filled-field": OscdFilledField;
  }
}

/**
 * @final
 * @suppress {visibility}
 */
export class OscdFilledField extends FilledField {
  static override styles: CSSResultOrNative[] = [sharedStyles, filledStyles];
}
