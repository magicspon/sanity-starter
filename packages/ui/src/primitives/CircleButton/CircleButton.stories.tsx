import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import { CircleButton } from '.'
import { Theme } from '~primitives/Theme'

export default {
  component: CircleButton,
  title: 'primitives/CircleButton',
} as ComponentMeta<typeof CircleButton>

const Template: ComponentStory<typeof CircleButton> = (args) => (
  <Theme theme="navy">
    <CircleButton {...args} />
  </Theme>
)

export const Primary = Template.bind({})
Primary.args = {
  label: 'read more',
}
