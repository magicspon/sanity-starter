import * as React from 'react'

export function Print(props: Record<string, any>): JSX.Element {
  return <pre>{JSON.stringify(props, null, 2)}</pre>
}
