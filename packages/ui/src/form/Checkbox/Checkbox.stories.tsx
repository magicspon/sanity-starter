import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Checkbox } from '.'
import { Stack } from '~primitives/Stack'
import { Label } from '~form/Label'
import { Text } from '~primitives/Text'
import { Flex } from '~primitives/Flex'

export default {
  component: Checkbox,
  title: 'form/Checkbox',
} as ComponentMeta<typeof Checkbox>

const Template: ComponentStory<typeof Checkbox> = (args) => (
  <Label htmlFor={args.id}>
    <Checkbox {...args} />
  </Label>
)

export const Primary = Template.bind({})

Primary.args = {
  id: 'comments',
  'aria-describedby': 'comments-description',
  name: 'comments',
  type: 'checkbox',
}

export const Example = () => {
  return (
    <Stack>
      <Label htmlFor="a">
        <Flex align="center" gap="sm">
          <Checkbox name="a" id="a" />
          <Text asChild>
            <span>Option one</span>
          </Text>
        </Flex>
      </Label>
      <Label htmlFor="b">
        <Flex align="center" gap="sm">
          <Checkbox name="b" id="b" />
          <Text asChild>
            <span>Option two</span>
          </Text>
        </Flex>
      </Label>
      <Label htmlFor="c">
        <Flex align="center" gap="sm">
          <Checkbox name="c" id="c" />
          <Text asChild>
            <span>Option three</span>
          </Text>
        </Flex>
      </Label>
    </Stack>
  )
}
