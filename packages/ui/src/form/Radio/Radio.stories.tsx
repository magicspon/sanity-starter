import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Radio } from '.'
import { Stack } from '~primitives/Stack'
import { Label } from '~form/Label'
import { Text } from '~primitives/Text'
import { Flex } from '~primitives/Flex'

export default {
  component: Radio,
  title: 'form/Radio',
} as ComponentMeta<typeof Radio>

const Template: ComponentStory<typeof Radio> = (args) => (
  <Label htmlFor={args.id}>
    <Radio {...args} />
  </Label>
)

export const Primary = Template.bind({})

Primary.args = {
  id: 'comments',
  'aria-describedby': 'comments-description',
  name: 'comments',
  type: 'Radio',
}

export const Example = () => {
  return (
    <Stack>
      <Label htmlFor="a">
        <Flex align="center" gap="sm">
          <Radio name="a" id="a" />
          <Text asChild>
            <span>Option one</span>
          </Text>
        </Flex>
      </Label>
      <Label htmlFor="b">
        <Flex align="center" gap="sm">
          <Radio name="a" id="b" />
          <Text asChild>
            <span>Option two</span>
          </Text>
        </Flex>
      </Label>
      <Label htmlFor="c">
        <Flex align="center" gap="sm">
          <Radio name="a" id="c" />
          <Text asChild>
            <span>Option three</span>
          </Text>
        </Flex>
      </Label>
    </Stack>
  )
}
