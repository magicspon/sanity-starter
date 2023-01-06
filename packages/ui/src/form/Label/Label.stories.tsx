import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Label } from '.'

export default {
  component: Label,
  title: 'form/Label',
} as ComponentMeta<typeof Label>

const Template: ComponentStory<typeof Label> = (args) => <Label {...args} />

export const Primary = Template.bind({})
Primary.args = {
  children: 'Your name',
}
