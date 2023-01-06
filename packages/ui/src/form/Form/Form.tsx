import * as React from 'react'
import { cva, VariantProps } from 'class-variance-authority'

export interface TFormProps
  extends React.FormHTMLAttributes<HTMLFormElement>,
    VariantProps<typeof style> {
  status?: 'loading' | 'pending' | 'finished'
}

/**
 * Component must be wrapped with a label
 * @example
 * <label><Form /></label>
 * @returns
 */
export const Form = React.forwardRef<HTMLFormElement, TFormProps>(function Form(
  { theme, className, status, ...props },
  ref,
): JSX.Element {
  const cx = style({ theme, className })

  return <form data-state={status} ref={ref} className={cx} {...props} />
})

const style = cva('data-loading:opacity-50 data-loading:pointer-events-none', {
  variants: {
    theme: {
      basic: 'peer-checked:text-blue-600 peer-focus:ring-blue-600',
    },
  },
  defaultVariants: {
    theme: 'basic',
  },
})
