/* eslint-disable max-len */
import { ArticleDetails } from 'entities/Article';
import { CommentList } from 'entities/Comment';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import cls from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
    className?: string;
}

export const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
    const { className } = props;
    const { t } = useTranslation('article-details');
    const { id } = useParams<{ id: string }>();

    if (!id) {
        return (
            <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
                {t('Статья не найдена')}
            </div>
        );
    }

    return (
        <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
            <ArticleDetails id={id} />
            <Text className={cls.commentTitle} title={t('Комментарии')} />
            <CommentList comments={[
                {
                    id: '1',
                    text: 'comment 1',
                    user: {
                        id: '1',
                        username: 'Kirov',
                        avatar:
                            'https://avatars.dzeninfra.ru/get-zen_doc/44972/pub_5a59e08d5816695e0efbe7b9_5a59e4f19b403c1a4920cd7a/scale_1200',
                    },
                },
                {
                    id: '2',
                    text: 'comment 2',
                    user: {
                        id: '1',
                        username: 'Kirov',
                        avatar: 'https://avatars.dzeninfra.ru/get-zen_doc/44972/pub_5a59e08d5816695e0efbe7b9_5a59e4f19b403c1a4920cd7a/scale_1200',
                    },
                },
            ]}
            />
        </div>
    );
};

export default memo(ArticleDetailsPage);
