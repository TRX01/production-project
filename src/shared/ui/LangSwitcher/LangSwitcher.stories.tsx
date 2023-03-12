import { ComponentMeta, ComponentStory } from '@storybook/react'

import { LangSwitcher } from './LangSwitcher'
import { ThemeDecorator } from 'shared/config/storybook/themeDecorator'
import { Theme } from 'app/providers/themeProvider'

export default {
    title: 'shared/LangSwitcher',
    component: LangSwitcher,
    argTypes: {
        backgroundColor: { control: 'color' }
    },
} as ComponentMeta<typeof LangSwitcher>

const Template: ComponentStory<typeof LangSwitcher> = (args) => <LangSwitcher {...args} />

export const Light = Template.bind({})
Light.args = {}
Light.decorators = []
