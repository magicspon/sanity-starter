import * as React from 'react'
import { cva, VariantProps } from 'class-variance-authority'
import { Slot } from '@radix-ui/react-slot'

export interface TLabelProps
  extends Omit<React.LabelHTMLAttributes<HTMLLabelElement>, 'size'>,
    VariantProps<typeof style> {
  text: string
  asChild?: boolean
}

/**
 * Component must be wrapped with a label
 * @example
 * <label><Label /></label>
 * @returns
 */
export const FloatingLabel = React.forwardRef<HTMLLabelElement, TLabelProps>(
  function FloatingLabel(
    { className, children, text, element, asChild, ...props },
    ref,
  ) {
    const cx = style({ element, className })
    const Comp = asChild ? Slot : 'label'

    return (
      <Comp ref={ref} className="relative block" {...props}>
        {children}
        <span className={cx}>{text}</span>
      </Comp>
    )
  },
)

const style = cva(
  [
    'transition-transform flex items-center origin-top-left transform absolute top-0 z-10',
    'placeholder-visible:opacity-100 placeholder-visible:bg-transparent placeholder-visible:translate-y-0 placeholder-visible:translate-x-4',
  ],
  {
    variants: {
      element: {
        input: 'h-full -translate-y-10 -translate-x-0',
        textarea: 'h-12 -translate-y-10',
      },
    },
    defaultVariants: {
      element: 'input',
    },
  },
)
