import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import { SearchUser } from '@/components/SearchUser';
import { InputUI } from '@/components/ui';
import { useDebounce } from '@/hooks/debounce';
import { useAppDispatch } from '@/store';
import { useGetUsersQuery } from '@/store/gitHub/api';
import { changeUserApi } from '@/store/reducer/user';

export const Home = () => {
	const inputRef = useRef<HTMLInputElement | null>(null);
	const [search, setSearch] = useState('');
	const debounce = useDebounce<string>(search, 400);
	const [isDown, setIsDown] = useState(debounce.length > 0);
	const dispatch = useAppDispatch();

	const { isSuccess, isFetching, isError, status, data } = useGetUsersQuery(debounce, {
		skip: debounce.length <= 3,
		refetchOnFocus: true,
	});

	useEffect(() => {
		setIsDown(debounce.length > 3);
	}, [debounce]);

	useEffect(() => {
		const eventListener = (e: UIEvent) => {
			if (e.target !== inputRef.current) setIsDown(false);
		};
		document.addEventListener('click', eventListener);
		return () => document.removeEventListener('click', eventListener);
	}, []);

	return (
		<>
			<InputUI
				value={search}
				placeholder="Search github users"
				onChange={(e) => setSearch(e.target.value)}
				onFocus={() => setIsDown(search.length >= 3)}
				onClear={() => setSearch('')}
				ref={inputRef}
			></InputUI>
			<div className="relative">
				{isDown && !isFetching && isSuccess && (
					<div
						className="absolute z-10 bg-white shadow-big cursor-pointer
        top-[0px] left-0 right-0 max-h-[320px] overflow-y-auto rounded-[8px]"
					>
						{data?.map((user) => (
							<Link key={user.id} to={'/user'} onClick={() => dispatch(changeUserApi(user.login))}>
								<SearchUser {...{ user }} />
							</Link>
						))}
					</div>
				)}
			</div>

			<div className="p-5 font-mono">
				{isError && <p>Status: {status}</p>}
				{isFetching && <p>Users loading...</p>}
				{!isFetching && data?.length === 0 && isSuccess && <p>{`The search did't take any results`}</p>}
			</div>
		</>
	);
};

export default Home;
