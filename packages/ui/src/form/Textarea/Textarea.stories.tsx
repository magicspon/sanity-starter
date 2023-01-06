import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Textarea } from '.'

export default {
  component: Textarea,
  title: 'form/Textarea',
} as ComponentMeta<typeof Textarea>

const Template: ComponentStory<typeof Textarea> = (args) => (
  <Textarea {...args} />
)

export const Primary = Template.bind({})
Primary.args = {}
