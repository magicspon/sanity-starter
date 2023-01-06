import * as React from 'react'
import { cva, VariantProps } from 'class-variance-authority'

export interface TLabelProps
  extends React.LabelHTMLAttributes<HTMLLabelElement>,
    VariantProps<typeof style> {}

/**
 * Component must be wrapped with a label
 * @example
 * <label><Label /></label>
 * @returns
 */
export const Label = React.forwardRef<HTMLLabelElement, TLabelProps>(
  function Label({ display, className, ...props }, ref): JSX.Element {
    const cx = style({ display, className })

    return <label ref={ref} className={cx} {...props} />
  },
)

const style = cva(null, {
  variants: {
    display: {
      block: 'block',
      inline: 'inline-block',
    },
  },
  defaultVariants: {
    display: 'block',
  },
})
