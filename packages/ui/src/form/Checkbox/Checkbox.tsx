import * as React from 'react'
import { CheckIcon } from '@radix-ui/react-icons'
import { Center } from '@ui/primitives/Center'
import { cva, VariantProps } from 'class-variance-authority'

export interface TCheckboxProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof style> {}

/**
 * Component must be wrapped with a label
 * @example
 * <label><Checkbox /></label>
 * @returns
 */
export const Checkbox = React.forwardRef<HTMLInputElement, TCheckboxProps>(
  function Checkbox(
    { theme, dimension, className, ...props },
    ref,
  ): JSX.Element {
    const cx = style({ theme, dimension, className })

    return (
      <>
        <input
          ref={ref}
          className="peer appearance-none absolute opacity-0 -transate-x-full"
          type="checkbox"
          {...props}
        />
        <Center className={cx}>
          <CheckIcon className="opacity-0 transition-opacity w-full h-full fill-current" />
        </Center>
      </>
    )
  },
)

const style = cva(
  'peer-checked:child:opacity-100 peer-focus:ring border flex-shrink-0',
  {
    variants: {
      theme: {
        basic:
          'peer-checked:text-white peer-focus:ring-mustard bg-blue border-blue',
      },
      dimension: {
        standard: 'w-5 h-5',
      },
    },
    defaultVariants: {
      theme: 'basic',
      dimension: 'standard',
    },
  },
)
