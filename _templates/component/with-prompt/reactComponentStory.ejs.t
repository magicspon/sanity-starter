---
to: "<%= storybook ? `${path}/${h.changeCase.pascalCase(name)}/${h.changeCase.pascalCase(name)}.stories.tsx` : null %>"
---
import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import { <%= h.changeCase.pascalCase(name) %> } from '.'

export default {
	component: <%= h.changeCase.pascalCase(name) %>,
	title: 'core/<%= h.changeCase.pascalCase(name) %>',
} as ComponentMeta<typeof <%= h.changeCase.pascalCase(name) %>>

const Template: ComponentStory<typeof <%= h.changeCase.pascalCase(name) %>> = (args) => <<%= h.changeCase.pascalCase(name) %> {...args} />

export const Primary = Template.bind({})
Primary.args = {}
