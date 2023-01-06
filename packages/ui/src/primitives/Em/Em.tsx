import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, VariantProps } from 'class-variance-authority'

const style = cva('text-blue-600', {
  variants: {
    intent: {
      title: 'font-bold',
    },
    font: {
      sans: 'font-sans',
      serif: 'font-serif',
    },
  },
  defaultVariants: {
    font: 'sans',
  },
})

export interface TEmProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof style> {
  asChild?: boolean
}

export const Em = React.forwardRef<HTMLSpanElement, TEmProps>(function Em(
  { asChild, font, intent, className, ...props },
  ref,
): JSX.Element {
  const Comp = asChild ? Slot : 'span'
  const cx = style({ font, intent, className })

  return <Comp ref={ref} className={cx} {...props} />
})
