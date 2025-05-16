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
import { customElement } from "lit/decorators.js";

import { SecondaryTab } from "@material/web/tabs/internal/secondary-tab.js";
import { styles as secondaryStyles } from "@material/web/tabs/internal/secondary-tab-styles.js";
import { styles as sharedStyles } from "@material/web/tabs/internal/tab-styles.js";

declare global {
  interface HTMLElementTagNameMap {
    "oscd-secondary-tab": OscdSecondaryTab;
  }
}

/**
 * @summary Tab allow users to display a tab within a Tabs.
 *
 * @final
 * @suppress {visibility}
 */
@customElement("oscd-secondary-tab")
export class OscdSecondaryTab extends SecondaryTab {
  static override styles: CSSResultOrNative[] = [sharedStyles, secondaryStyles];
}
