import { ComponentMeta, ComponentStory } from '@storybook/react'

import { ThemeSwitcher } from './ThemeSwitcher'
import { ThemeDecorator } from 'shared/config/storybook/themeDecorator'
import { Theme } from 'app/providers/themeProvider'

export default {
    title: 'shared/ThemeSwitcher',
    component: ThemeSwitcher,
    argTypes: {
        backgroundColor: { control: 'color' }
    },
} as ComponentMeta<typeof ThemeSwitcher>

const Template: ComponentStory<typeof ThemeSwitcher> = (args) => <ThemeSwitcher {...args} />

export const Light = Template.bind({})

export const Dark = Template.bind({})
Dark.decorators = [ThemeDecorator(Theme.DARK)]
