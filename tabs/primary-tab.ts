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

import { PrimaryTab } from "@material/web/tabs/internal/primary-tab.js";
import { styles as primaryStyles } from "@material/web/tabs/internal/primary-tab-styles.js";
import { styles as sharedStyles } from "@material/web/tabs/internal/tab-styles.js";

declare global {
  interface HTMLElementTagNameMap {
    "oscd-primary-tab": OscdPrimaryTab;
  }
}

/**
 * @summary Tab allow users to display a tab within a Tabs.
 *
 * @final
 * @suppress {visibility}
 */
@customElement("oscd-primary-tab")
export class OscdPrimaryTab extends PrimaryTab {
  static override styles: CSSResultOrNative[] = [sharedStyles, primaryStyles];
}
