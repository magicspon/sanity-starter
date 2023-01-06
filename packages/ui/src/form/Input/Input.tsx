import * as React from 'react'
import { cva, VariantProps } from 'class-variance-authority'

export interface TInputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof style> {}

/**
 * Component must be wrapped with a label
 * @example
 * <label><Input /></label>
 * @returns
 */
export const Input = React.forwardRef<HTMLInputElement, TInputProps>(
  function Input(
    { theme, invalid, className, floating, ...props },
    ref,
  ): JSX.Element {
    const cx = style({ theme, invalid, floating, className })

    return <input ref={ref} className={cx} {...props} />
  },
)

const style = cva('block h-[58px] peer w-full focus:outline-none', {
  variants: {
    theme: {
      basic: 'bg-blue text-white px-4 focus:ring-2 focus:ring-mustard',
    },
    invalid: {
      standard:
        'placeholder-not-shown:invalid:border-pink-500 placeholder-not-shown:invalid:text-pink-600 placeholder-not-shown:focus:invalid:border-pink-500 placeholder-not-shown:focus:invalid:ring-pink-500',
    },
    floating: {
      true: 'placeholder-unfocus:opacity-0 placeholder-transparent placeholder-gray-400 ',
    },
  },
  defaultVariants: {
    theme: 'basic',
    invalid: 'standard',
    floating: false,
  },
})
