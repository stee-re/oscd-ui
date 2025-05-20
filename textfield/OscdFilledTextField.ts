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
import {OscdFilledField} from "../field/oscd-filled-field";
import { CSSResultOrNative } from "lit";
import { literal } from "lit/static-html.js";
import { styles as filledStyles } from "@material/web/textfield/internal/filled-styles.js";
import { FilledTextField } from "@material/web/textfield/internal/filled-text-field.js";
import { styles as sharedStyles } from "@material/web/textfield/internal/shared-styles.js";
import { ScopedElementsMixin } from "@open-wc/scoped-elements/lit-element.js";

export { type TextFieldType as OscdTextFieldType } from "@material/web/textfield/internal/text-field.js";

declare global {
  interface HTMLElementTagNameMap {
    "oscd-filled-text-field": OscdFilledTextField;
  }
}

/**
 * @final
 * @suppress {visibility}
 */
export class OscdFilledTextField extends ScopedElementsMixin(FilledTextField) {
  static override styles: CSSResultOrNative[] = [sharedStyles, filledStyles];

  static get scopedElements() {
    return {
      "oscd-filled-field": OscdFilledField,
    };
  }

  protected override readonly fieldTag = literal`oscd-filled-field`;
}
