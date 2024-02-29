import { ButtonUI, LinkUI } from '@/components/ui';
import { useAppSelector } from '@/store';
import { useGetUserQuery } from '@/store/gitHub/api';

export const UserPage = () => {
	const { userApi } = useAppSelector((state) => state.user);
	const { isLoading, isSuccess, isError, data: user } = useGetUserQuery(userApi, { skip: userApi.length === 0 });

	return (
		<>
			<ButtonUI link="/" className="mb-5">{`< Go Back`}</ButtonUI>
			{isLoading && <span className="">Loading...</span>}
			{isError && <span className="text-md text-red-600">Error</span>}
			{!isLoading && isSuccess && (
				<>
					<div className="font-bold text-2xl mb-4">{user?.login}</div>
					<div className="flex gap-[20px] items-start text-lg">
						<div className="text-center">
							<a href={user.html_url} target="_blank" rel="noreferrer">
								<img src={user?.avatar_url} alt={user?.login} className="w-[100px] rounded-full" />
							</a>
						</div>
						<div>
							<p>{user.name}</p>
							<p>{user.bio && `${user.bio}`}</p>
							<p>
								Repositories:{' '}
								<LinkUI href={user.repos_url} target="_blank">
									{user.repos_url}
								</LinkUI>
							</p>{' '}
						</div>
					</div>
				</>
			)}
		</>
	);
};
export default UserPage;
