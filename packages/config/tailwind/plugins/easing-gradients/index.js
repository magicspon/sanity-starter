/* eslint-disable @typescript-eslint/no-var-requires */
const plugin = require('tailwindcss/plugin')
const chroma = require('chroma-js')
const { easingCoordinates } = require('easing-coordinates')
const helpers = require('./helpers')

/**
 *
 * @param {colors} `[string, string]`,
 * @param {*} `{ x: number; y: number }[]`
 * @param {alphaDecimals } alphaDecimals
 * @param {colorMode} string //  InterpolationMode
 * @returns
 */
function parseColorStops(colors, coordinates, alphaDecimals, colorMode) {
  const colorStops = []
  colors = helpers.transparentFix(colors)
  coordinates.forEach((coordinate) => {
    const ammount = coordinate.y
    const percent = coordinate.x * 100
    let color = chroma.mix(colors[0], colors[1], ammount, colorMode).css('hsl')
    color = helpers.roundHslAlpha(color, alphaDecimals)
    if (Number(coordinate.x) !== 0 && Number(coordinate.x) !== 1) {
      colorStops.push(`${color} ${+percent.toFixed(2)}%`)
    } else {
      colorStops.push(color)
    }
  })
  return colorStops
}

// interface TGradientSettings {
//   alphaDecimals: number
//   colorMode: InterpolationMode
//   type: 'linear' | 'radial'
//   easing: string
//   colorStops: number
//   directions: Record<string, string>
// }

// type TColorArray = [string, string]
// type TColorObject = TGradientSettings & { color: TColorArray }
// type TKey = `bg-easing-${string}-${string}`
// type TOutput = Record<TKey, { backgroundImage: string }>

module.exports = plugin(
  function containerQueries({ addUtilities, e, theme }) {
    const values = theme('easing-gradients') ?? {}
    const config = theme('easing-config') ?? {}

    const defaults = {
      type: config.type,
      easing: config.easing,
      colorStops: config.colorStops,
      alphaDecimals: config.alphaDecimals,
      colorMode: config.colorMode,
    }
    const directions = config.directions

    const gradientData = Object.entries(values).map(([name, value]) => {
      const settings = Array.isArray(value)
        ? { ...defaults, color: value }
        : { ...defaults, ...value }
      const coordinates = easingCoordinates(
        settings.easing,
        settings.colorStops,
      )
      const colorStops = parseColorStops(
        settings.color,
        coordinates,
        settings.alphaDecimals,
        settings.colorMode,
      )

      return { name, colorStops, type: settings.type }
    })

    const classNames = gradientData
      .flatMap((data) => {
        return Object.entries(directions).map(([direction, to]) => {
          return {
            name: `.${e(`bg-easing-${direction}-${data.name}`)}`,
            value: `${data.type}-gradient(${to}, ${data.colorStops.join(',')})`,
          }
        })
      })
      .reduce(
        (acc, curr) => ({
          ...acc,
          [curr.name]: { backgroundImage: curr.value },
        }),
        {},
      )

    addUtilities(classNames)
  },
  {
    theme: {
      'easing-config': {
        alphaDecimals: 5,
        colorMode: 'lrgb',
        type: 'linear',
        easing: 'ease', // default settings
        colorStops: 15,
        directions: {
          t: 'to top',
          r: 'to right',
          b: 'to bottom',
          l: 'to left',
        },
      },
      'easing-gradients': {
        a: ['#a4e', '#03d'], // must be two colors
        b: { easing: 'ease-in-out', steps: 5, color: ['#4ae', '#0da'] },
        c: {
          easing: 'cubic-bezier(0.48, 0.3, 0.64, 1)',
          color: ['#4ae', '#0da'],
        },
        d: { easing: 'steps(4, skip-none)', color: ['#4ae', '#0da'] },
      },
    },
  },
)
