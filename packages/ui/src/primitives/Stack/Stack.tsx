import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, VariantProps } from 'class-variance-authority'

const style = cva('', {
  variants: {
    size: {
      xs: 'between:mb-1',
      sm: 'between:mb-3',
      base: 'between:mb-5',
      md: 'between:mb-8',
      lg: 'between:mb-10',
      xl: 'between:mb-12',
      '2xl': 'between:mb-14',
    },
    align: {
      center: 'text-center',
    },
    reset: {
      sm: 'sm:between:mb-0',
      md: 'md:between:mb-0',
      lg: 'lg:between:mb-0',
    },
    lg: {
      xs: 'lg:between:mb-1',
      sm: 'lg:between:mb-3',
      base: 'lg:between:mb-5',
      md: 'lg:between:mb-8',
      xl: 'lg:between:mb-12',
    },
  },
  defaultVariants: {
    size: 'base',
  },
})

export interface TStackProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof style> {
  asChild?: boolean
}

export const Stack = React.forwardRef<HTMLDivElement, TStackProps>(
  function Stack(
    { asChild, size, align, reset, lg, className, ...props },
    ref,
  ): JSX.Element {
    const Comp = asChild ? Slot : 'div'
    const cx = style({ size, align, reset, lg, className })

    return <Comp ref={ref} className={cx} {...props} />
  },
)
