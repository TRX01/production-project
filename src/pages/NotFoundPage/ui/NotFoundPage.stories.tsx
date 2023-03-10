import { ComponentMeta, ComponentStory } from '@storybook/react'

import NotFoundPage from './NotFoundPage'
import { ThemeDecorator } from 'shared/config/storybook/themeDecorator'
import { Theme } from 'app/providers/themeProvider'

export default {
    title: 'pages/MainPage',
    component: NotFoundPage,
    argTypes: {
        backgroundColor: { control: 'color' }
    },
} as ComponentMeta<typeof NotFoundPage>

const Template: ComponentStory<typeof NotFoundPage> = (args) => <NotFoundPage />

export const Light = Template.bind({})
Light.args = {}

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
