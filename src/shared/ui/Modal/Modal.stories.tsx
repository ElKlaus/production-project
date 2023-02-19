import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Modal } from './Modal';

export default {
    title: 'Shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam dolorum autem tempora et optio voluptatem repudiandae incidunt sed libero fugit? Impedit nobis aperiam obcaecati non harum neque, dolorem hic temporibus!',
};

export const Dark = Template.bind({});
Dark.args = {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam dolorum autem tempora et optio voluptatem repudiandae incidunt sed libero fugit? Impedit nobis aperiam obcaecati non harum neque, dolorem hic temporibus!',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
