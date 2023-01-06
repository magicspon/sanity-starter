/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    'easing-config': {
      alphaDecimals: 5,
      colorMode: 'lrgb',
      type: 'linear',
      easing: 'ease',
      colorStops: 15,
      directions: {
        t: 'to top',
        r: 'to right',
        b: 'to bottom',
        l: 'to left',
        tl: 'to top left',
        tr: 'to top right',
        bl: 'to bottom left',
        br: 'to bottom right',
      },
    },
    'easing-gradients': () => ({
      brand: {
        easing: 'cubic-bezier(0.54, 0.22, 0.54, 0.83)',
        color: ['#e60073', '#0073e6'],
      },
    }),

    plugins: [require('./plugins/easing-gradients')],
  },
}
