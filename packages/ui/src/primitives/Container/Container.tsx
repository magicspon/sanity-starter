import * as React from 'react'
import { cva, VariantProps } from 'class-variance-authority'

export interface TContainerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof style> {}

export const Container = React.forwardRef<HTMLDivElement, TContainerProps>(
  function Container({ className, align, ...props }, ref): JSX.Element {
    const cx = style({ align, className })

    return <div ref={ref} className={cx} {...props} />
  },
)

const style = cva('max-w-container', {
  variants: {
    align: {
      center: 'mx-auto',
    },
  },
  defaultVariants: {
    align: 'center',
  },
})
