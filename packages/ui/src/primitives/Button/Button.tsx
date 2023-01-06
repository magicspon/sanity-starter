import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, VariantProps } from 'class-variance-authority'

export interface TButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {
  asChild?: boolean
}

export const Button = React.forwardRef<HTMLButtonElement, TButtonProps>(
  function Button({ asChild, intent, size, className, ...props }, ref) {
    const Comp = asChild ? Slot : 'button'
    const cx = button({ intent, size, className })

    return <Comp ref={ref} className={cx} {...props} />
  },
)

const button = cva(
  'rounded-xl border transition-colors justify-center focus:outline-none inline-flex focus:ring-2 uppercase text-center tracking-200 border-current',
  {
    variants: {
      intent: {
        primary: 'text-primary hover:text-secondary focus:ring-secondary',
        secondary: 'text-secondary hover:text-primary focus:ring-primary',
      },
      size: {
        sm: ['text-sm px-4 py-3'],
        base: ['text-base px-6 py-4'],
      },
    },
    defaultVariants: {
      intent: 'primary',
      size: 'base',
    },
  },
)
