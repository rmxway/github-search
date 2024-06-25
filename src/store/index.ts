import { configureStore, createListenerMiddleware, isAnyOf } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import { gitHubAPI } from '@/store/gitHub/api';
import { setUsersStorage } from '@/store/local';
import userReducer, { addToFavorites, removeFromFavorites } from '@/store/reducer/user';

const listenerMiddleware = createListenerMiddleware();
const startAppListening = listenerMiddleware.startListening.withTypes<RootState, AppDispatch>();

export const store = configureStore({
	reducer: {
		[gitHubAPI.reducerPath]: gitHubAPI.reducer,
		users: userReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().prepend(listenerMiddleware.middleware).concat(gitHubAPI.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Actions listener middleware
startAppListening({
	matcher: isAnyOf(addToFavorites, removeFromFavorites),
	effect: (_, listenerApi) => {
		const currentUsers = listenerApi.getState().users;
		setUsersStorage(currentUsers.favorites);
	},
});

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const usersSelector = (state: RootState) => state.users;
