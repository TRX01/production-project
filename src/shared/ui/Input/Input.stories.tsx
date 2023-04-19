import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Input, InputTheme } from './Input';

export default {
    title: 'shared/Input',
    component: Input,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

// Simple
export const Clear = Template.bind({});
Clear.args = {
    placeholder: 'Text',
};

export const ClearDark = Template.bind({});
ClearDark.args = {
    placeholder: 'Text',
};
ClearDark.decorators = [ThemeDecorator(Theme.DARK)]

// Bottom line
export const BottomLine = Template.bind({});
BottomLine.args = {
    placeholder: 'Text',
    theme: InputTheme.BOTTOM_LINE,
};

export const BottomLineDark = Template.bind({});
BottomLineDark.args = {
    placeholder: 'Text',
    theme: InputTheme.BOTTOM_LINE,
};
BottomLineDark.decorators = [ThemeDecorator(Theme.DARK)]
