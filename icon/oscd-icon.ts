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

import { Icon } from "@material/web/icon/internal/icon.js";
import { styles } from "@material/web/icon/internal/icon-styles.js";

declare global {
  interface HTMLElementTagNameMap {
    "oscd-icon": OscdIcon;
  }
}

/**
 * @final
 * @suppress {visibility}
 */
@customElement("oscd-icon")
export class OscdIcon extends Icon {
  /** @nocollapse */
  static override styles: CSSResultOrNative[] = [styles];
}
