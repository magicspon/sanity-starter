import * as React from 'react'
import * as RadixSeparator from '@radix-ui/react-separator'
import clsx from 'clsx'

export interface TSeparatorProps {}

type TProps = React.ComponentProps<typeof RadixSeparator.Root>

export const Separator = React.forwardRef<HTMLDivElement, TProps>(
  function Separator({ className, ...props }, ref): JSX.Element {
    return (
      <RadixSeparator.Root
        {...props}
        ref={ref}
        className={clsx(
          'data-vertical:w-px data-vertical:h-11 data-horizontal:w-11 data-horizontal:h-px bg-mustard',
          className,
        )}
      />
    )
  },
)
