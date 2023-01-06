import clsx from 'clsx'
import * as React from 'react'
import { cva, VariantProps } from 'class-variance-authority'
import { Slot } from '@radix-ui/react-slot'

export interface TGridProps {}

const column = cva(null, {
  variants: {
    gutter: {
      true: 'px-gutter',
    },
    modulo: {
      0: 'col-span-5 col-start-1',
      1: 'col-span-4',
      2: 'col-span-5',
    },
  },
  defaultVariants: {
    gutter: true,
  },
})

const inner = cva(null, {
  variants: {
    modulo: {
      0: 'ml-auto',
      1: 'mx-auto',
      2: 'mr-auto',
    },
    gutter: {
      true: 'max-w-[calc((var(--container-width)-var(--gutter)*(var(--columns)*2))/var(--columns))]',
      false: 'max-w-[calc(var(--container-width)/var(--columns))]',
    },
  },
})

export const Root = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(function Root({ className, ...props }, ref): JSX.Element {
  return (
    <div ref={ref} className={clsx('grid-cols-page', className)} {...props} />
  )
})

export const Cell = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> &
    VariantProps<typeof column> &
    VariantProps<typeof inner> & { asChild?: boolean }
>(function Cell(
  { className, children, modulo, gutter, asChild, ...props },
  ref,
): JSX.Element {
  const cx = column({ gutter, modulo, className })
  const innerCx = inner({ modulo, gutter: !!gutter })
  const Comp = asChild ? Slot : 'div'

  return (
    <div ref={ref} className={cx} {...props}>
      <Comp className={innerCx}>{children}</Comp>
    </div>
  )
})
