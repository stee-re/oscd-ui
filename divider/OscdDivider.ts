/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * Copyright 2025 OMICRON Electronics GmbH
 * SPDX-License-Identifier: Apache-2.0
 */
import { CSSResultOrNative } from "lit";

import { Divider } from "@material/web/divider/internal/divider.js";
import { styles } from "@material/web/divider/internal/divider-styles.js";

/**
 * @tag oscd-divider
 * @summary A divider is a thin line that groups content in lists and
 * containers.
 *
 * Dividers can reinforce tapability, such as when used to separate
 * list items or define tappable regions in an accordion.
 *
 * @final
 * @suppress {visibility}
 */
export class OscdDivider extends Divider {
  static override styles: CSSResultOrNative[] = [styles];
}
