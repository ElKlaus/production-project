import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Comment } from 'entities/Comment';
import { StateSchema } from 'app/providers/StoreProvider';
import {
    fetchCommentsByArticleId,
} from 'pages/ArticleDetailsPage/model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { Article } from 'entities/Article';
import {
    articleDetailsRecommendationsSchema,
} from '../types/articleDetailsRecommendationsSchema';

const recommendationsAdapter = createEntityAdapter<Article>({
    selectId: (article) => article.id,
});

export const getArticleRecommendations = recommendationsAdapter.getSelectors<StateSchema>(
    (state) => state.articleDetailsRecommendations || recommendationsAdapter.getInitialState(),
);

const articleDetailsPageRecommendationsSlice = createSlice({
    name: 'articleDetailsPageRecommendationsSlice',
    initialState: recommendationsAdapter.getInitialState<articleDetailsRecommendationsSchema>({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {},
    }),
    reducers: {},
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(fetchCommentsByArticleId.pending, (state) => {
    //             state.error = undefined;
    //             state.isLoading = true;
    //         })
    //         .addCase(fetchCommentsByArticleId.fulfilled, (
    //             state,
    //             action: PayloadAction<Comment[]>,
    //         ) => {
    //             state.isLoading = false;
    //             recommendationsAdapter.setAll(state, action.payload);
    //         })
    //         .addCase(fetchCommentsByArticleId.rejected, (state, action) => {
    //             state.isLoading = false;
    //             state.error = action.payload;
    //         });
    // },
});

export const {
    reducer: articleDetailsPageRecommendationsSliceReducer,
} = articleDetailsPageRecommendationsSlice;
