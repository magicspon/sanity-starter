import { create } from '@storybook/theming'
import { addons } from '@storybook/addons'

const theme = create({
  base: 'light',

  brandTitle: 'Capstar',
  brandUrl: 'https://capstar-ui.vercel.app',
  brandImage: '/logo.svg',
  brandTarget: '_self',
})

addons.setConfig({
  theme,
})
