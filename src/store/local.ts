import { GitHubUser } from '@/modules/interfaces';

const lsName = 'gh-users';

export const setUsersStorage = (items: GitHubUser[]) => localStorage.setItem(lsName, JSON.stringify(items || []));
export const getUsersStorage = () => {
	const stringItems = localStorage.getItem(lsName) || '[]';
	const items = JSON.parse(stringItems as string);
    return items;
};
