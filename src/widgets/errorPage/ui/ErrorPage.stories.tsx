import { ComponentMeta, ComponentStory } from '@storybook/react'

import { ErrorPage } from './ErrorPage'
import { ThemeDecorator } from 'shared/config/storybook/themeDecorator'
import { Theme } from 'app/providers/themeProvider'

export default {
    title: 'widgets/ErrorPage',
    component: ErrorPage,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof ErrorPage>

const Template: ComponentStory<typeof ErrorPage> = (args) => <ErrorPage />

export const Light = Template.bind({})
Light.args = {}

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
