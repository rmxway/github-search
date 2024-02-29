import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { GitHubUser, GitHubUsersResponse, ResponseUser } from '@/modules/interfaces';

export const gitHubAPI = createApi({
	reducerPath: 'api/gitHub',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://api.github.com/',
	}),
	endpoints: (builder) => ({
		getUsers: builder.query<ResponseUser[], string>({
			query: (name: string) => ({
				url: 'search/users',
				params: {
					q: name,
				},
			}),
			transformResponse: (response: GitHubUsersResponse<ResponseUser[]>) => response.items,
		}),
		getUser: builder.query<GitHubUser, string>({
			query: (name: string) => `users/${name}`,
		}),
	}),
});

export const { useGetUsersQuery, useGetUserQuery } = gitHubAPI;
