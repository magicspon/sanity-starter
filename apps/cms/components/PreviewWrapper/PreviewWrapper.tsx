import Link from 'next/link'
import * as React from 'react'

export interface TPreviewWrapperProps {
  children: React.ReactNode
}

export function PreviewWrapper({
  children,
}: TPreviewWrapperProps): JSX.Element {
  return (
    <>
      <Link
        className="underline transition hover:opacity-50 fixed top-0 left z-50"
        href="/api/exit-preview"
      >
        Exit preview mode
      </Link>
      {children}
    </>
  )
}
