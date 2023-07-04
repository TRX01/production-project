import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import LoginForm from './LoginForm';

export default {
    title: 'features/LoginForm',
    component: LoginForm,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const Form = Template.bind({});
Form.args = {
    isOpen: true,
};
Form.decorators = [
    StoreDecorator({
        loginForm: {
            username: '123',
            password: '123',
        },
    }),
]

export const FormDark = Template.bind({});
FormDark.args = {
    isOpen: true,
};
FormDark.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
        loginForm: {
            username: '123',
            password: '123',
        },
    }),
]

export const FormDarkError = Template.bind({});
FormDarkError.args = {
    isOpen: true,
};
FormDarkError.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
        loginForm: {
            username: '123',
            password: '123',
            error: 'thats some error',
        },
    }),
]

export const FormDarkLoading = Template.bind({});
FormDarkLoading.args = {
    isOpen: true,
};
FormDarkLoading.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
        loginForm: {
            username: '123',
            password: '123',
            isLoading: true,
        },
    }),
]
