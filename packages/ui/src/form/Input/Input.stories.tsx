import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Input } from '.'

export default {
  component: Input,
  title: 'form/Input',
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />

export const Primary = Template.bind({})
Primary.args = {
  type: 'text',
  placeholder: 'Your name',
  id: 'name',
  name: 'name',
}
