import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type InitialStateType = {
	userApi: string;
};

const initialState: InitialStateType = {
	userApi: '',
};

const userReducer = createSlice({
	name: 'user',
	initialState,
	reducers: {
		changeUserApi: (state, action: PayloadAction<string>) => {
			state.userApi = action.payload;
		},
	},
});

const { actions, reducer } = userReducer;

export const { changeUserApi } = actions;

export default reducer;
