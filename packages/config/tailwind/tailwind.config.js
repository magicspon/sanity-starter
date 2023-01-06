/* eslint-disable @typescript-eslint/no-var-requires */
const plugin = require('tailwindcss/plugin')
const fontMetrics = require('@capsizecss/metrics/inter')
const { fontFamily } = require('tailwindcss/defaultTheme')

const bodyColor = `rgb(var(--color-body), --tw-text-opacity)`
// const primaryColor = `rgb(var(--color-primary), --tw-text-opacity)`
// const secondaryColor = `rgb(var(--color-secondary), --tw-text-opacity)`
const pageColor = `rgb(var(--color-page), --tw-text-opacity)`

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}', '../../packages/ui/src/**/*.{ts,tsx}'],
  presets: [require('./tailwind.gradient')],
  theme: {
    capsize: {
      rootLineHeightUnitless: 1.2,
      fontMetrics: {
        sans: fontMetrics,
      },
      className: 'trim',
    },
    data: {
      // state
      checked: 'state~="checked"',
      unchecked: 'state~="unchecked"',
      active: 'state~="active"',
      inactive: 'state~="inactive"',
      open: 'state~="open"',
      closed: 'state~="closed"',
      quit: 'state~="quit"',
      loading: 'state~="loading"',
      pending: 'state~="pending"',
      finished: 'state~="finished"',
      // swipe
      start: 'swipe~="start"',
      move: 'swipe~="move"',
      cancel: 'swipe~="cancel"',
      end: 'swipe~="end"',
      //orientation
      vertical: 'orientation~="vertical"',
      horizontal: 'orientation~="horizontal"',
      // variant
      sm: 'variant~="sm"',
      md: 'variant~="md"',
      lg: 'variant~="lg"',
    },

    extend: {
      animation: {
        expand: 'expand 0.3s ease-in-out',
        collapse: 'collapse 0.3s ease-in-out',
        'enter-right': 'enter-right 0.7s ease-in-out',
        'exit-right': 'exit-right 0.7s ease-in-out',
        'fade-in': 'fade-in 0.3s ease-in-out',
        'fade-out': 'fade-out 0.3s ease-in-out',
        'slide-in': 'slide-in 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        'slide-out': 'slide-out 150ms cubic-bezier(0.16, 1, 0.3, 1)',
      },
      aspectRatio: {
        '9/16': '9 / 16',
      },
      backgroundImage: {
        chevron: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
      },
      borderRadius: {
        xl: '0.875rem',
      },
      opacity: {
        12: '0.12',
      },
      colors: {
        primary: 'rgb(var(--color-primary) / <alpha-value>)',
        secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
        page: 'rgb(var(--color-page) / <alpha-value>)',
        body: 'rgb(var(--color-body) / <alpha-value>)',
        accent: 'rgb(var(--color-accent) / <alpha-value>)',
        highlight: 'rgb(var(--color-highlight) / <alpha-value>)',
      },
      fontSize: {
        '2xs': ['0.625rem', { lineHeight: '1rem' }], // 10px
        xs: ['0.75rem', { lineHeight: '1rem' }],
        sm: ['0.875rem', { lineHeight: '1.25rem' }],
        base: ['1rem', { lineHeight: '1.75rem' }], // 16pt / 28pt
        lg: ['1.1875rem', { lineHeight: '1.5625rem' }], // 19pt / 25pt
        xl: ['1.375rem', { lineHeight: '1.875rem' }], // 22pt / 30pt
        '2xl': ['1.6875rem', { lineHeight: '2rem' }], // 27px
        '3xl': ['2.0625rem', { lineHeight: '2.5rem' }], // 33pt / 40pt
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }], // 60pt
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
      },
      fontFamily: {
        sans: ['var(--font-inter)', ...fontFamily.sans],
      },
      gridColumn: {
        'span-custom': 'span var(--col-span) / span var(--col-span)',
      },
      gridColumnStart: {
        custom: 'var(--col-start)',
      },
      gridColumnEnd: {
        custom: 'var(--col-end)',
      },
      gridRow: {
        'span-custom': 'span var(--row-span) / span var(--row-span)',
      },
      gridRowStart: {
        custom: 'var(--row-start)',
      },
      gridRowEnd: {
        custom: 'var(--row-end)',
      },
      gridTemplateColumns: {
        page: `minmax(0, 1fr) repeat(12, minmax(0, calc(var(--container-width) / 12))) minmax(0, 1fr)`,
      },
      keyframes: {
        expand: {
          '0%': { height: '0' },
          '100%': { height: 'var(--radix-accordion-content-height)' },
        },
        collapse: {
          '0%': { height: 'var(--radix-accordion-content-height)' },
          '100%': { height: '0' },
        },

        'enter-right': {
          '0%': { transform: 'translate3d(100%,0,0)' },
          '100%': { transform: 'translate3d(0%,0,0)' },
        },
        'exit-right': {
          '0%': { transform: 'translate3d(0%,0,0)' },
          '100%': { transform: 'translate3d(100%,0,0)' },
        },

        'fade-in': {
          '0%': { opacity: 0 },
          '100%': { opacity: 100 },
        },
        'fade-out': {
          '0%': { opacity: 100 },
          '100%': { opacity: 0 },
        },

        'slide-in': {
          '0%': {
            transform: 'translateX(calc(100% + var(--viewport-padding)))',
          },
          '100%': {
            transform: 'translateX(0)',
          },
        },

        'slide-out': {
          '0%': { transform: 'translateX(var(--radix-toast-swipe-end-x))' },
          '100%': {
            transform: 'translateX(calc(100% + var(--viewport-padding)))',
          },
        },
      },
      letterSpacing: {
        200: '0.2em',
      },
      maxWidth: (theme) => ({
        ...theme('width'),
        container: 'var(--container-width)',
      }),
      minHeight: (theme) => ({
        ...theme('spacing'),
      }),
      spacing: {
        gutter: 'var(--gutter)',
      },
      translate: {
        'radix-toast-swipe-move-x': 'var(--radix-toast-swipe-move-x)',
        'radix-toast-swipe-move-y': 'var(--radix-toast-swipe-move-y)',
        'radix-toast-swipe-end-x': 'var(--radix-toast-swipe-end-x)',
        'radix-toast-swipe-end-y': 'var(--radix-toast-swipe-end-y)',
        custom: 'var(--translate)',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': bodyColor,
            '--tw-prose-headings': bodyColor,
            '--tw-prose-lead': bodyColor,
            '--tw-prose-links': bodyColor,
            '--tw-prose-bold': bodyColor,
            '--tw-prose-counters': bodyColor,
            '--tw-prose-bullets': bodyColor,
            '--tw-prose-hr': bodyColor,
            '--tw-prose-quotes': bodyColor,
            '--tw-prose-quote-borders': bodyColor,
            '--tw-prose-captions': bodyColor,
            '--tw-prose-code': bodyColor,
            '--tw-prose-pre-code': bodyColor,
            '--tw-prose-pre-bg': pageColor,
            '--tw-prose-th-borders': bodyColor,
            '--tw-prose-td-borders': bodyColor,
            '--tw-prose-invert-body': bodyColor,
            '--tw-prose-invert-headings': bodyColor,
            '--tw-prose-invert-lead': bodyColor,
            '--tw-prose-invert-links': theme('colors.white'),
            '--tw-prose-invert-bold': theme('colors.white'),
            '--tw-prose-invert-counters': bodyColor,
            '--tw-prose-invert-bullets': bodyColor,
            '--tw-prose-invert-hr': bodyColor,
            '--tw-prose-invert-quotes': bodyColor,
            '--tw-prose-invert-quote-borders': bodyColor,
            '--tw-prose-invert-captions': bodyColor,
            '--tw-prose-invert-code': theme('colors.white'),
            '--tw-prose-invert-pre-code': bodyColor,
            '--tw-prose-invert-pre-bg': 'rgb(0 0 0 / 50%)',
            '--tw-prose-invert-th-borders': bodyColor,
            '--tw-prose-invert-td-borders': bodyColor,
          },
        },
      }),
      zIndex: {
        100: 100,
        500: 500,
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@themosaad/tailwindcss-capsize'),
    plugin(({ addVariant, e }) => {
      addVariant('hocus', ['&:hover', '&:focus'])
      addVariant('between', `& > *:not(:last-child)`)
      addVariant('child', `& > *`)
      addVariant(
        'placeholder-unfocus',
        `&:placeholder-shown:not(:focus)::placeholder`,
      )
      addVariant('placeholder-not-shown', `&:not(:placeholder-shown)`)
      addVariant('placeholder-visible', ({ modifySelectors, separator }) => {
        modifySelectors(
          ({ className }) =>
            `*:placeholder-shown:not(:focus) ~ .${e(
              `placeholder-visible${separator}${className}`,
            )}`,
        )
      })
    }),
  ],
}
