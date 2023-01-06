import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, VariantProps } from 'class-variance-authority'

const style = cva('flex', {
  variants: {
    intent: {
      all: 'items-center justify-center',
      x: 'justify-center',
      y: 'items-center',
    },
  },
  defaultVariants: {
    intent: 'all',
  },
})

export interface TCenterProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof style> {
  asChild?: boolean
}

export const Center = React.forwardRef<HTMLDivElement, TCenterProps>(
  function Center({ asChild, intent, className, ...props }, ref): JSX.Element {
    const Comp = asChild ? Slot : 'div'
    const cx = style({ intent, className })

    return <Comp ref={ref} className={cx} {...props} />
  },
)
