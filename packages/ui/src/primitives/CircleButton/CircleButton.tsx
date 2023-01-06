import * as React from 'react'
import { Center } from '@ui/primitives/Center'

export interface TCircleButtonProps extends React.HTMLAttributes<HTMLElement> {
  label: string
}

export function CircleButton({
  label,
  ...props
}: TCircleButtonProps): JSX.Element {
  return (
    <Center {...props} asChild>
      <span className="block w-16 h-16 bg-page text-primary hover:text-secondary rounded-full transition-colors">
        <svg aria-hidden width="15" height="28.586" viewBox="0 0 15 28.586">
          <path
            d="M373,1825.839l13.94,13.94L373,1853.719"
            transform="translate(-372.646 -1825.486)"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          />
        </svg>
        <span className="sr-only">{label}</span>
      </span>
    </Center>
  )
}
