import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Text } from '.'
import { Stack } from '~primitives/Stack'

export default {
  component: Text,
  title: 'primitives/Text',
} as ComponentMeta<typeof Text>

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />

export const Sans = Template.bind({})
Sans.args = {
  children: 'Text',
}

export const Serif = Template.bind({})
Serif.args = {
  children: 'Text',
}

const Playground: ComponentStory<typeof Text> = () => (
  <Stack size="xl">
    <Stack size="xl" className="text-center max-w-2xl mx-auto">
      <Stack size="base">
        <Text noTrim bold split intent="h1">
          H1 Lora Bold 60pt
          <br />
          Lora Italic 60pt
        </Text>
      </Stack>
      <Text medium intent="home">
        Homepage intro copy Azo Sans medium 19pt / 25pt. Whatever the context,
        whatever the platform, our strategic communication support leads to
        mission-driven messages. Messages that help growing businesses and
        leading executives to realise their potential. And then go beyond.
      </Text>
      <Text intent="intro">
        Intro copy Lora Regular 33pt / 40pt Whatever the context, whatever the
        platform, our strategic support builds mission-driven messages. Messages
        that add value to your business.
      </Text>
    </Stack>
    <hr />
    <div className="grid grid-cols-2 gap-y-4 gap-x-24">
      <div className="col-span-2">
        <Text intent="subheading" className="text-yellow uppercase max-w-xs">
          Subheading 1 azo sans medium 16pt / 25pt. 200 letter spacing
        </Text>
      </div>
      <Stack size="xs" className="col-span-1">
        <Text bold split noTrim intent="h2">
          H2 Lora Bold 33pt
          <br />
          Lora Italic 60pt.
        </Text>
      </Stack>

      <div className="col-span-1">
        <Text intent="base">
          Body copy Azo Sans Regular 16pt / 28pt. By engaging the right people
          in the right way, we help fast-growing businesses and industry-leading
          executives to reach the next level. We have a transformative impact.
        </Text>
      </div>
    </div>
    <hr />
    <div className="grid grid-cols-2 gap-y-4 gap-x-24">
      <div className="col-span-1">
        <Text intent="small-quote">
          Quote small Lora Medium Italic 22pt / 30pt. Capstar has a flexible and
          dynamic approach. They coached us in the moment and helped us through
          our critical communication challenges.
        </Text>
      </div>

      <div className="col-span-1">
        <Text intent="large-quote">
          Quote large Lora Medium Italic 33pt / 40pt.Capstar is my secret weapon
          in any sales process
        </Text>
      </div>
    </div>
  </Stack>
)
export const Example = Playground.bind({})
