import { Story } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';

export const ThemeDecorator = (theme: Theme) => (story: () => Story) => (
    <div className={`app ${theme}`}>
        {/* <StoryComponent /> */}
        {story()}
    </div>
);
