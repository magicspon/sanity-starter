import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, VariantProps } from 'class-variance-authority'

const style = cva(null, {
  variants: {
    intent: {
      float: 'shadow-2xl',
    },
    size: {
      sm: 'p-3',
      base: 'p-6',
      lg: 'p-12',
    },
  },
  defaultVariants: {
    size: 'sm',
  },
})

export interface TBoxProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof style> {
  asChild?: boolean
}

export const Box = React.forwardRef<HTMLDivElement, TBoxProps>(function Box(
  { asChild, size, intent, className, ...props },
  ref,
): JSX.Element {
  const Comp = asChild ? Slot : 'div'
  const cx = style({ size, intent, className })

  return <Comp ref={ref} className={cx} {...props} />
})
