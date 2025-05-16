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

import { FilledField } from "@material/web/field/internal/filled-field.js";
import { styles as filledStyles } from "@material/web/field/internal/filled-styles.js";
import { styles as sharedStyles } from "@material/web/field/internal/shared-styles.js";

declare global {
  interface HTMLElementTagNameMap {
    "oscd-filled-field": OscdFilledField;
  }
}

/**
 * TODO(b/228525797): add docs
 * @final
 * @suppress {visibility}
 */
@customElement("oscd-filled-field")
export class OscdFilledField extends FilledField {
  static override styles: CSSResultOrNative[] = [sharedStyles, filledStyles];
}
