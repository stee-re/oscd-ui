import { ScopedElementsMixin } from "@open-wc/scoped-elements/lit-element.js";
import { LitElement, html } from "lit";
import { DecoratorFunction } from "storybook/internal/types";
import { html as staticHtml, unsafeStatic } from "lit/static-html.js";

export const scopedWcDecorator: DecoratorFunction =
  (storyFn, context) => {
    const scopedElements = context.parameters["scopedElements"] || {};

    // Generate a unique tag name to avoid redefinition errors
    const tagName = `dynamic-wrapper-${context.id}`;
    if (!customElements.get(tagName)) {
      class DynamicWrapper extends ScopedElementsMixin(LitElement) {
        static get scopedElements() {
          return scopedElements;
        }

        override render() {
          return html`${storyFn()}`;
        }
      }

      customElements.define(tagName, DynamicWrapper);
    }

    return staticHtml`<${unsafeStatic(tagName)}></${unsafeStatic(tagName)}>`;;
  };
