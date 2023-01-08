import * as React from 'react'
import { TextInput, Stack, Label } from '@sanity/ui'

export interface TLinkFieldProps {
  type: { title: string }
  value: string
}

export const LinkField = React.forwardRef<HTMLInputElement, TLinkFieldProps>(
  function LinkField(props, ref): JSX.Element {
    return (
      <Stack space={2}>
        <Label>{props.type.title}</Label>
        <TextInput ref={ref} value={props.value} />
      </Stack>
    )
  },
)
