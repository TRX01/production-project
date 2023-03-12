import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Button, ButtonTheme } from './Button'
import { ThemeDecorator } from 'shared/config/storybook/themeDecorator'
import { Theme } from 'app/providers/themeProvider'

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' }
    },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
    children: 'button'
}

export const Clear = Template.bind({})
Clear.args = {
    children: 'button',
    theme: ButtonTheme.CLEAR,
}

export const Outline = Template.bind({})
Outline.args = {
    children: 'button',
    theme: ButtonTheme.OUTLINE,
}

export const OutlineDark = Template.bind({})
OutlineDark.args = {
    children: 'button',
    theme: ButtonTheme.OUTLINE,
}
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)]
