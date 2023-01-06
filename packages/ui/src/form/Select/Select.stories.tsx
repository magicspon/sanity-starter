import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Select } from '.'

export default {
  component: Select,
  title: 'form/Select',
} as ComponentMeta<typeof Select>

const Template: ComponentStory<typeof Select> = (args) => (
  <Select {...args}>
    <option value="a">Option a</option>
    <option value="b">Option b</option>
    <option value="c">Option c</option>
  </Select>
)

export const Primary = Template.bind({})
Primary.args = {}
