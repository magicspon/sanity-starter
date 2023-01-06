import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, VariantProps } from 'class-variance-authority'

const style = cva('min-h-screen w-full', {
  variants: {
    center: {
      all: 'flex items-center justify-center',
      x: 'flex justify-center',
      y: 'flex items-center',
    },
  },
})

export interface TScreenProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof style> {
  asChild?: boolean
}

export const Screen = React.forwardRef<HTMLDivElement, TScreenProps>(
  function Screen({ asChild, center, className, ...props }, ref): JSX.Element {
    const Comp = asChild ? Slot : 'div'
    const cx = style({ center, className })

    return <Comp ref={ref} className={cx} {...props} />
  },
)
