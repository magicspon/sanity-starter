import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, VariantProps } from 'class-variance-authority'

const style = cva('flex', {
  variants: {
    align: {
      center: 'items-center',
      start: 'items-start',
      end: 'items-end',
    },
    justify: {
      center: 'justify-center',
      start: 'justify-start',
      between: 'justify-between',
      end: 'justify-end',
    },
    gap: {
      xs: 'gap-1',
      sm: 'gap-2',
      base: 'gap-4',
    },
  },
})

export interface TFlexProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof style> {
  asChild?: boolean
}

export const Flex = React.forwardRef<HTMLDivElement, TFlexProps>(function Flex(
  { asChild, align, gap, justify, className, ...props },
  ref,
): JSX.Element {
  const Comp = asChild ? Slot : 'div'
  const cx = style({ align, gap, justify, className })

  return <Comp ref={ref} className={cx} {...props} />
})
