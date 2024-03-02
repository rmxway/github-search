import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { GitHubUser } from '@/modules/interfaces';

type InitialStateType = {
	favorites: GitHubUser[];
};

const initialState: InitialStateType = {
	favorites: [],
};

const userReducer = createSlice({
	name: 'users',
	initialState,
	reducers: {
		addToFavorites: (state, { payload: user }: PayloadAction<GitHubUser>) => {
			state.favorites.push(user);
		},
		removeFromFavorites: (state, { payload: id }: PayloadAction<number>) => {
			state.favorites = state.favorites.filter((item) => item.id !== id);
		},
	},
});

const { actions, reducer } = userReducer;

export const { addToFavorites, removeFromFavorites } = actions;

export default reducer;
