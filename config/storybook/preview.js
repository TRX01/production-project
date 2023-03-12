import { addDecorator } from '@storybook/react'
import { StyleDecorator } from 'shared/config/storybook/styleDecorator'
import { ThemeDecorator } from 'shared/config/storybook/themeDecorator'
import { Theme } from 'app/providers/themeProvider'

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/
        }
    }
}

addDecorator(StyleDecorator)
addDecorator(ThemeDecorator(Theme.LIGHT))
