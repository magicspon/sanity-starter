import * as React from 'react'
import { Center } from '@ui/primitives/Center'
import { cva, VariantProps } from 'class-variance-authority'

export interface TRadioProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof style> {}

/**
 * Component must be wrapped with a label
 * @example
 * <label><Radio /></label>
 * @returns
 */
export const Radio = React.forwardRef<HTMLInputElement, TRadioProps>(
  function Radio({ theme, dimension, className, ...props }, ref): JSX.Element {
    const cx = style({ theme, dimension, className })

    return (
      <>
        <input
          ref={ref}
          className="peer appearance-none absolute opacity-0 -transate-x-full"
          type="radio"
          {...props}
        />
        <Center className={cx}>
          <div className="opacity-0 transition-opacity w-full h-full bg-current rounded-full" />
        </Center>
      </>
    )
  },
)

const style = cva(
  'peer-checked:child:opacity-100 peer-focus:ring rounded-full border',
  {
    variants: {
      theme: {
        basic:
          'peer-checked:text-blue-600 peer-checked:shadow text-blue-600 peer-focus:ring-blue-600',
      },
      dimension: {
        standard: 'w-5 h-5 p-1',
      },
    },
    defaultVariants: {
      theme: 'basic',
      dimension: 'standard',
    },
  },
)
