import { ComponentMeta, ComponentStory } from '@storybook/react'

import { AppLink, AppLinkTheme } from './AppLink'
import { RouterDecorator } from 'shared/config/storybook/routerDecorator'
import { ThemeDecorator } from 'shared/config/storybook/themeDecorator'
import { Theme } from 'app/providers/themeProvider'

export default {
    title: 'shared/AppLink',
    component: AppLink,
    argTypes: {
        backgroundColor: { control: 'color' }
    },
    args: { to: '/' },
    decorators: [
        RouterDecorator
    ]
} as ComponentMeta<typeof AppLink>

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />

export const Primary = Template.bind({})
Primary.args = {
    theme: AppLinkTheme.PRIMARY,
    children: 'TEXT',
}

export const Secondary = Template.bind({})
Secondary.args = {
    theme: AppLinkTheme.SECONDARY,
    children: 'TEXT',
}

export const PrimaryDark = Template.bind({})
PrimaryDark.args = {
    theme: AppLinkTheme.PRIMARY,
    children: 'TEXT',
}
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]

export const SecondaryDark = Template.bind({})
SecondaryDark.args = {
    theme: AppLinkTheme.SECONDARY,
    children: 'TEXT',
}
SecondaryDark.decorators = [ThemeDecorator(Theme.DARK)]
