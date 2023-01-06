import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import clsx from 'clsx'

export interface TFillProps extends React.HTMLAttributes<HTMLElement> {
  asChild?: boolean
}

export const Fill = React.forwardRef<HTMLDivElement, TFillProps>(function Fill(
  { asChild, className, ...props },
  ref,
): JSX.Element {
  const Comp = asChild ? Slot : 'div'

  return (
    <Comp
      ref={ref}
      className={clsx('absolute top-0 left-0 w-full h-full', className)}
      {...props}
    />
  )
})
