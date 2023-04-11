11.04.2023
    �🔗  Linked to elklaus/production-project-server (created .vercel and added it to .gitignore)
    �🔍  Inspect: https://vercel.com/elklaus/production-project-server/DQyjodgeFjcPJZPvs56Ln6WmkmBp [5
    ✅  Production: https://production-project-server-ivory.vercel.app [16s]

30.03.2023
    Приведение типов, this, прототипное наследование, события, взаимдойствия с DOM
    Различные варианты объединений, что было до join, where, having, group by

29.03.2023
    Сделать тесты для initArticlesPage по примеру тестов для fetchNextArticlesPage

23.03.2023
    Сделать сниппеты на async thunc

22.03.2023
    сделать сниппет:
        import { ComponentMeta, ComponentStory } from '@storybook/react';

        import { ArticleList } from './ArticleList';

        export default {
            title: 'entities/ArticleList',
            component: ArticleList,
            argTypes: {
                backgroundColor: { control: 'color' },
            },
        } as ComponentMeta<typeof ArticleList>;

        const Template: ComponentStory<typeof ArticleList> = (args) => <ArticleList {...args} />;

        export const Normal = Template.bind({});
        Normal.args = {};

16.03.2023
    Поправить автофик scss линтера -
    Настроить плагин шаблонизации -
    Настроить плагин добавления переводов -

15.03.2023
    50 Страница статьи. Блочная структура. Компонент Code. Копирование 46:16.
        Написать тесты для entites/Article(слайсы сервисы)
    
    useCallback();
    селекторы в Redux

