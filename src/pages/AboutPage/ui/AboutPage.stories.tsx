import { ComponentMeta, ComponentStory } from '@storybook/react'

import AboutPage from './AboutPage'
import { ThemeDecorator } from 'shared/config/storybook/themeDecorator'
import { Theme } from 'app/providers/themeProvider'

export default {
    title: 'pages/AboutPage',
    component: AboutPage,
    argTypes: {
        backgroundColor: { control: 'color' }
    },
} as ComponentMeta<typeof AboutPage>

const Template: ComponentStory<typeof AboutPage> = (args) => <AboutPage />

export const Light = Template.bind({})
Light.args = {}

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
