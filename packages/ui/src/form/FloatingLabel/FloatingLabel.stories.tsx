import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import { FloatingLabel } from '.'
import { Input } from '@ui/form/Input'
import { Textarea } from '@ui/form/Textarea'

export default {
  component: FloatingLabel,
  title: 'form/FloatingLabel',
} as ComponentMeta<typeof FloatingLabel>

const Template: ComponentStory<typeof FloatingLabel> = (args) => (
  <div className="pt-12">
    <FloatingLabel {...args}>
      <Input floating name="name" id="name" placeholder="Your name" />
    </FloatingLabel>
  </div>
)

export const Primary = Template.bind({})
Primary.args = {
  text: 'Your name',
}

const TextAreaTemplate: ComponentStory<typeof FloatingLabel> = (args) => (
  <div className="pt-12">
    <FloatingLabel {...args}>
      <Textarea floating name="name" id="name" placeholder="Message" />
    </FloatingLabel>
  </div>
)
export const FloatingTextArea = TextAreaTemplate.bind({})
FloatingTextArea.args = {
  text: 'Message',
  element: 'textarea',
}
