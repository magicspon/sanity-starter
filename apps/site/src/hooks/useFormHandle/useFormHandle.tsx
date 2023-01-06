import * as React from 'react'

export function useFormHandle() {
  return (fn: () => void) => (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    fn()
  }
}
