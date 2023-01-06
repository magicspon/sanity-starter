import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, VariantProps } from 'class-variance-authority'

const mustard = '248 175 18'
const navy = '18 31 51'
const blue = '28 60 101'
const white = '255 255 255'
const pebble = '228 223 220'
const stone = '197 197 187'

const themes = {
  blue: {
    '--color-primary': mustard,
    '--color-secondary': white,
    '--color-page': blue,
    '--color-body': white,
  },
  yellow: {
    '--color-primary': white,
    '--color-secondary': '18 31 51',
    '--color-page': mustard,
    '--color-body': white,
  },
  navy: {
    '--color-primary': mustard,
    '--color-secondary': white,
    '--color-page': navy,
    '--color-body': white,
  },
  white: {
    '--color-primary': mustard,
    '--color-secondary': navy,
    '--color-page': white,
    '--color-body': navy,
  },
  pebble: {
    '--color-primary': navy,
    '--color-secondary': mustard,
    '--color-page': pebble,
    '--color-body': navy,
  },
  stone: {
    '--color-primary': navy,
    '--color-secondary': mustard,
    '--color-page': stone,
    '--color-body': navy,
  },
} as const

export type TTheme = keyof typeof themes

export interface TTextProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof style> {
  asChild?: boolean
  theme: TTheme
}

export const Theme = React.forwardRef<HTMLDivElement, TTextProps>(
  function Theme(
    { asChild, theme, bg, className, ...props },
    ref,
  ): JSX.Element {
    const Comp = asChild ? Slot : 'div'
    const cx = style({ bg, className })

    return (
      <Comp
        className={cx}
        style={themes[theme] as React.CSSProperties}
        ref={ref}
        {...props}
      />
    )
  },
)

const style = cva(null, {
  variants: {
    bg: {
      true: 'bg-page',
    },
  },
})
