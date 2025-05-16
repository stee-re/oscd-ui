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
import { customElement } from "lit/decorators.js";

import { FilledButton } from "@material/web/button/internal/filled-button.js";
import { styles as filledStyles } from "@material/web/button/internal/filled-styles.js";
import { styles as sharedElevationStyles } from "@material/web/button/internal/shared-elevation-styles.js";
import { styles as sharedStyles } from "@material/web/button/internal/shared-styles.js";
import { CSSResult } from "@lit/reactive-element";

declare global {
  interface HTMLElementTagNameMap {
    "oscd-filled-button": OscdFilledButton;
  }
}

/**
 * @summary Buttons help people take action, such as sending an email, sharing a
 * document, or liking a comment.
 *
 * @description
 * __Emphasis:__ High emphasis – For the primary, most important, or most common
 * action on a screen
 *
 * __Rationale:__ The filled button’s contrasting surface color makes it the
 * most prominent button after the FAB. It’s used for final or unblocking
 * actions in a flow.
 *
 * __Example usages:__
 * - Save
 * - Confirm
 * - Done
 *
 * @final
 * @suppress {visibility}
 */
@customElement("oscd-filled-button")
export class OscdFilledButton extends FilledButton {
  static override styles: CSSResult[] = [
    sharedStyles,
    sharedElevationStyles,
    filledStyles,
  ];
}
