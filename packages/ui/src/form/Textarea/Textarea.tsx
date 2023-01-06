import * as React from 'react'
import { cva, VariantProps } from 'class-variance-authority'

export interface TTextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    VariantProps<typeof style> {}

/**
 * Component must be wrapped with a label
 * @example
 * <label><Textarea /></label>
 * @returns
 */
export const Textarea = React.forwardRef<HTMLTextAreaElement, TTextareaProps>(
  function Textarea(
    { theme, dimension, invalid, className, floating, ...props },
    ref,
  ): JSX.Element {
    const cx = style({ theme, dimension, invalid, floating, className })

    return <textarea ref={ref} className={cx} {...props} />
  },
)

const style = cva('block w-full focus:outline-none', {
  variants: {
    theme: {
      basic: 'border px-4 py-3 focus:ring focus:ring-blue-600',
    },
    dimension: {
      standard: '',
    },
    invalid: {
      standard:
        'invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500',
    },
    floating: {
      true: 'placeholder-unfocus:opacity-0 placeholder-transparent placeholder-gray-400 ',
    },
  },
  defaultVariants: {
    theme: 'basic',
    dimension: 'standard',
    invalid: 'standard',
  },
})
