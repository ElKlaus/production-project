import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Text, TextTheme } from './Text';

export default {
    title: 'Shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    title: 'Title lorem ipsun',
    text: 'Description Description Description',
};

export const Error = Template.bind({});
Error.args = {
    title: 'Title lorem ipsun',
    text: 'Description Description Description',
    theme: TextTheme.ERROR,
};

export const OnlyTytle = Template.bind({});
OnlyTytle.args = {
    title: 'Title lorem ipsun',
};

export const OnlyText = Template.bind({});
OnlyText.args = {
    text: 'Description Description Description',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    title: 'Title lorem ipsun',
    text: 'Description Description Description',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTytleDark = Template.bind({});
OnlyTytleDark.args = {
    title: 'Title lorem ipsun',
};
OnlyTytleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTextDark = Template.bind({});
OnlyTextDark.args = {
    text: 'Description Description Description',
};
OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];
