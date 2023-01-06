import * as React from 'react'
import { cva, VariantProps } from 'class-variance-authority'

export interface TSelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement>,
    VariantProps<typeof style> {}

/**
 * Component must be wrapped with a label
 * @example
 * <label><Select /></label>
 * @returns
 */
export const Select = React.forwardRef<HTMLSelectElement, TSelectProps>(
  function Select({ theme, dimension, className, ...props }, ref): JSX.Element {
    const cx = style({ theme, dimension, className })

    return <select ref={ref} className={cx} {...props} />
  },
)

const style = cva(
  'block border appearance-none bg-chevron bg-[size:1.25rem_1.25rem] bg-[position:calc(100%-0.5rem)_50%] bg-no-repeat rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm',
  {
    variants: {
      theme: {
        basic: '',
      },
      dimension: {
        standard: '',
      },
    },
    defaultVariants: {
      theme: 'basic',
      dimension: 'standard',
    },
  },
)
