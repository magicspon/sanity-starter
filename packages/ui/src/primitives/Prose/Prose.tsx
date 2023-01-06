import * as React from 'react'
import { cva, VariantProps } from 'class-variance-authority'
import { Slot } from '@radix-ui/react-slot'

export interface TProseProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof style> {}

export function Prose({
  className,
  intent,
  ...props
}: TProseProps): JSX.Element {
  const cx = style({ intent, className })

  return <div className={cx} {...props} />
}

const style = cva('font-sans text-body', {
  variants: {
    intent: {
      base: 'prose hover:prose-a:text-mustard',
    },
  },
  defaultVariants: {
    intent: 'base',
  },
})

export function NoProse({
  children,
  asChild,
}: {
  children: React.ReactNode
  asChild?: boolean
}) {
  const Comp = asChild ? Slot : 'div'
  return <Comp className="not-prose">{children}</Comp>
}
