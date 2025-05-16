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
import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";
import "@material/web/elevation/elevation.js";

declare global {
  interface HTMLElementTagNameMap {
    "oscd-app-bar": OscdAppBar;
  }
}

@customElement("oscd-app-bar")
export class OscdAppBar extends LitElement {
  static override styles = css`
    :host {
      --md-elevation-level: var(--oscd-app-bar-elevation, 3);
      --md-elevation-shadow-color: var(
        --oscd-app-bar-shadow-color,
        var(--md-sys-color-shadow, #000)
      );
      --app-bar-color: var(
        --oscd-app-bar-color,
        var(--md-sys-color-on-primary, #1d1b20)
      );
      --app-bar-background-color: var(
        --oscd-app-bar-background-color,
        var(--md-sys-color-primary, #fff)
      );
      --app-bar-title-font-family: var(
        --oscd-app-bar-title-font-family,
        var(
          --md-sys-typescale-body-large-font,
          var(--md-ref-typeface-plain, Roboto)
        )
      );
      --app-bar-title-font-size: var(
        --oscd-app-bar-title-font-size,
        var(--md-sys-typescale-body-large-size, 1.25rem)
      );
      --app-bar-title-line-height: var(
        --oscd-app-bar-title-line-height,
        var(--md-sys-typescale-body-large-line-height, 2rem)
      );
      --app-bar-title-font-weight: var(
        --oscd-app-bar-title-font-weight,
        var(
          --md-sys-typescale-body-large-weight,
          var(--md-ref-typeface-weight-regular, 500)
        )
      );
    }

    header {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      position: sticky;
      top: 0;
      z-index: 4;
      color: var(--app-bar-color);
      background-color: var(--app-bar-background-color);
    }

    .main-header {
      padding: 0 12px;
      display: flex;
      flex-grow: 1;
      align-items: center;
      height: 64px;
    }

    @media (max-width: 599px) {
      .main-header {
        height: 56px;
      }
    }

    ::slotted([slot="title"]) {
      display: flex;
      align-items: center;
      gap: 4px;
      margin-left: 16px;
      font-family: var(--app-bar-title-font-family);
      font-size: var(--app-bar-title-font-size);
      font-weight: var(--app-bar-title-font-weight);
      line-height: var(--app-bar-title-line-height);
    }

    .sub-header {
      display: flex;
      width: 100%;
    }

    .spacer {
      flex: 1;
    }
  `;

  override render() {
    return html`
      <header>
        <div>
          <md-elevation part="elevation"></md-elevation>
          <div class="main-header">
            <slot name="actionStart"></slot>
            <slot name="title"></slot>
            <span class="spacer"></span>
            <slot name="actionEnd"></slot>
          </div>
          <div class="sub-header">
            <slot></slot>
          </div>
        </div>
      </header>
    `;
  }
}
