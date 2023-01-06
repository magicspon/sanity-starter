import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import * as Grid from '.'
import { Container } from '~primitives/Container'

export default {
  component: Grid.Root,
  title: 'primitives/Grid',
} as ComponentMeta<typeof Grid.Root>

const Template: ComponentStory<typeof Grid.Root> = () => (
  <>
    <Container className="border px-gutter">....</Container>
    <Grid.Root className="grid">
      {Array.from({ length: 6 }).map((_, i) => (
        <Grid.Cell gutter modulo={(i % 3) as 0 | 1 | 2} key={i}>
          abc
        </Grid.Cell>
      ))}
    </Grid.Root>
  </>
)

export const Primary = Template.bind({})
Primary.args = {}
