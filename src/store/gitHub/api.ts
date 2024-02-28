import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { GitHubUsersResponse, ResponseUser } from '@/modules/interfaces';

export const gitHubAPI = createApi({
	reducerPath: 'api/gitHub',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://api.github.com/search/',
	}),
	endpoints: (builder) => ({
		getUsers: builder.query<ResponseUser[], string>({
			query: (name: string) => ({
				url: 'users',
				params: {
					q: name,
				},
			}),
			transformResponse: (response: GitHubUsersResponse<ResponseUser[]>) => response.items,
		}),
	}),
});

export const { useGetUsersQuery } = gitHubAPI;
