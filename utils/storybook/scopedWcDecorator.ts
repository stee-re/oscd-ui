import { ScopedElementsMixin } from "@open-wc/scoped-elements/lit-element.js";
import { property } from "lit/decorators.js";
import { LitElement, html } from "lit";
import { DecoratorFunction } from "storybook/internal/types";
import { html as staticHtml, unsafeStatic } from "lit/static-html.js";

export const scopedWcDecorator: DecoratorFunction = (storyFn, context) => {
  const scopedElements = context.parameters["scopedElements"] || {};
  const storyArgs = context["args"] || {};

  // Generate a unique tag name to avoid redefinition errors
  const tagName = `dynamic-wrapper-${context.id}`;
  if (!customElements.get(tagName)) {
    class DynamicWrapper extends ScopedElementsMixin(LitElement) {
      static get scopedElements() {
        return scopedElements;
      }

      @property({ type: Object })
      declare storyArgs: Record<string, unknown>;

      override render() {
        return html`${storyFn()}`;
      }
    }

    customElements.define(tagName, DynamicWrapper);
  }

  return staticHtml`<${unsafeStatic(tagName)} .storyArgs=${storyArgs}></${unsafeStatic(tagName)}>`;
};
