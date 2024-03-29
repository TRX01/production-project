import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Modal } from 'shared/ui/Modal/Modal';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus alias, doloremque dolores ducimus esse fuga fugiat illum ipsa iure labore, laborum necessitatibus omnis, perferendis quae ratione rem tempora! Aut, molestias!',
};
