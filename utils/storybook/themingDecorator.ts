import { html } from 'lit';
import { Args, ArgTypes, DecoratorFunction } from 'storybook/internal/types';

const mdSysVarsWithOurDefaults = {
  '--md-sys-color-background': 'unset',
  '--md-sys-color-on-background': 'unset',

  '--md-sys-color-primary': 'var(--oscd-primary)',
  '--md-sys-color-primary-container': 'unset',
  '--md-sys-color-primary-fixed': 'unset',
  '--md-sys-color-primary-fixed-dim': 'unset',
  '--md-sys-color-scrim': '#000000',
  '--md-sys-color-secondary': 'var(--oscd-secondary)',
  '--md-sys-color-secondary-container': 'var(--oscd-base2)',
  '--md-sys-color-secondary-fixed': 'unset',
  '--md-sys-color-secondary-fixed-dim': 'unset',
  '--md-sys-color-shadow': 'unset',
  '--md-sys-color-surface': 'var(--oscd-base3)',
  '--md-sys-color-surface-bright': 'var(--oscd-base2)',
  '--md-sys-color-surface-container': 'var(--oscd-base3)',
  '--md-sys-color-surface-container-high': 'var(--oscd-base3)',
  '--md-sys-color-surface-container-highest': 'var(--oscd-base3)',
  '--md-sys-color-surface-container-low': 'unset',
  '--md-sys-color-surface-container-lowest': 'unset',
  '--md-sys-color-surface-dim': 'unset',
  '--md-sys-color-surface-tint': 'unset',
  '--md-sys-color-surface-variant': 'unset',

  '--md-sys-color-outline': 'unset',
  '--md-sys-color-outline-variant': 'var(--oscd-base0)',

  '--md-sys-color-on-error': 'var(--oscd-base3)',
  '--md-sys-color-on-error-container': 'unset',
  '--md-sys-color-on-primary': 'var(--oscd-base3)',
  '--md-sys-color-on-primary-container': 'unset',
  '--md-sys-color-on-primary-fixed': 'unset',
  '--md-sys-color-on-primary-fixed-variant': 'unset',
  '--md-sys-color-on-secondary': 'var(--oscd-base3)',
  '--md-sys-color-on-secondary-container': 'unset',
  '--md-sys-color-on-secondary-fixed': 'unset',
  '--md-sys-color-on-secondary-fixed-variant': 'unset',
  '--md-sys-color-on-surface': 'var(--oscd-base00)',
  '--md-sys-color-on-surface-variant': 'var(--oscd-base3)',

  '--md-sys-color-error': 'var(--oscd-error)',
  '--md-sys-color-error-container': 'unset',

  '--md-sys-color-on-tertiary': 'unset',
  '--md-sys-color-on-tertiary-container': 'unset',
  '--md-sys-color-on-tertiary-fixed': 'unset',
  '--md-sys-color-on-tertiary-fixed-variant': 'unset',

  '--md-sys-color-inverse-on-surface': 'unset',
  '--md-sys-color-inverse-primary': 'unset',
  '--md-sys-color-inverse-surface': 'unset',

  '--md-sys-color-tertiary': 'unset',
  '--md-sys-color-tertiary-container': 'unset',
  '--md-sys-color-tertiary-fixed': 'unset',
  '--md-sys-color-tertiary-fixed-dim': 'unset',
};

export const themingArgTypes = Object.entries(mdSysVarsWithOurDefaults).reduce(
  (acc: Partial<ArgTypes>, entry) => {
    const [key, value] = entry;
    return {
      ...acc,
      [key]: {
        control: { type: 'color' as const },
        description: 'App Bar Text Color',
        table: {
          category: 'CSS Variables',
          defaultValue: {
            summary: value,
          },
        },
      },
    };
  },
  {} as Partial<ArgTypes>,
);

export const themingArgs = Object.entries(mdSysVarsWithOurDefaults).reduce(
  (acc: Partial<ArgTypes>, entry) => {
    const [key, value] = entry;
    return {
      ...acc,
      [key]: value,
    };
  },
  {} as Partial<Args>,
);

export const themingDecorator: DecoratorFunction = (storyFn, { args }) => {
  const { style } = document.documentElement;
  const applyVarFromArgs = (cssKey: string, argKey: string) => {
    const cssValue = args[argKey];
    if (cssValue) {
      style.setProperty(cssKey, cssValue);
    }
  };
  applyVarFromArgs('color', '--md-sys-color-on-background');
  applyVarFromArgs('color-background', '--md-sys-color-background');
  applyVarFromArgs('border-color', '--md-sys-color-outline');
  applyVarFromArgs('box-shadow', '--md-sys-color-shadow');

  const styleVariables = Object.entries(args)
    .filter(
      ([key, value]) => key.startsWith('--') && value && value !== 'unset',
    )
    .map(([key, value]) => `${key}: ${value};`)
    .join('\n');
  const cssVariableStyleBlock = `:root {\n${styleVariables}\n};`;

  return html`
    <style>
      ${cssVariableStyleBlock}
    </style>
    ${storyFn()}
  `;
};
