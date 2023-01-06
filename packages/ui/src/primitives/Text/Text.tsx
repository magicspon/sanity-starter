import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, VariantProps } from 'class-variance-authority'

export interface TTextProps
  extends React.HTMLAttributes<
      HTMLParagraphElement | HTMLHeadingElement | HTMLDivElement
    >,
    VariantProps<typeof style> {
  asChild?: boolean
}

export const Text = React.forwardRef<
  HTMLParagraphElement | HTMLHeadingElement | HTMLDivElement,
  TTextProps
>(function Text(
  { asChild, intent, bold, medium, split, noTrim, className, italic, ...props },
  ref,
): JSX.Element {
  const Comp = asChild ? Slot : 'p'
  const cx = style({
    intent,
    italic,
    bold,
    split,
    noTrim,
    medium,
    className,
  })

  return <Comp ref={ref} className={cx} {...props} />
})

const style = cva(null, {
  variants: {
    italic: {
      true: 'italic',
    },
    bold: {
      true: 'font-bold',
    },
    medium: {
      true: 'font-medium',
    },
    noTrim: {
      false: 'trim',
    },

    size: {
      title: '',
      sub: '',
      sm: '',
    },

    intent: {
      sm: 'text-sm',
      base: 'text-base',
      body: 'text-base font-sans',
      home: 'text-base font-sans',
      subheading: 'text-xs lg:text-sm font-sans tracking-200 uppercase',
      intro: 'text-xl sm:text-2xl md:text-3xl font-serif font-normal',
      h1: 'text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif',
      h2: 'text-xl sm:text-2xl md:text-3xl font-serif',
      h3: 'text-xl md:text-2xl',
      'small-quote': 'font-serif text-xl font-medium italic',
      'large-quote': 'font-serif text-3xl font-medium italic',
    },
    split: {
      true: 'first-line:font-serif first-line:font-medium first-line:not-italic font-normal italic whitespace-pre-line',
    },
  },
  defaultVariants: {
    noTrim: false,
  },
})
