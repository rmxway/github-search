import { configureStore } from '@reduxjs/toolkit';

import { gitHubAPI } from '@/store/gitHub/api';

export const store = configureStore({
	reducer: {
		[gitHubAPI.reducerPath]: gitHubAPI.reducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(gitHubAPI.middleware),
});
