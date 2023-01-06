import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Button } from '.'
import { Theme } from '~primitives/Theme'

export default {
  component: Button,
  title: 'primitives/Button',
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  children: (
    <a href="#0" className="inline-block">
      Hello world
    </a>
  ),
  intent: 'primary',
  // type: 'button',
  asChild: true,
}

export const Playground = () => {
  return (
    <div className="grid grid-cols-2 gap-8">
      <Theme bg className="p-6 col-span-1" theme="navy">
        <Button>Learn more</Button>
      </Theme>
      <Theme bg className="p-6 col-span-1" theme="blue">
        <Button>Learn more</Button>
      </Theme>
      <Theme bg className="p-6 col-span-1" theme="yellow">
        <Button>Learn more</Button>
      </Theme>
      <Theme bg className="p-6 col-span-1" theme="white">
        <Button>Learn more</Button>
      </Theme>
    </div>
  )
}
