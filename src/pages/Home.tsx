import { useEffect, useRef, useState } from 'react';

import { SearchUser } from '@/components/SearchUser';
import { InputUI } from '@/components/ui';
import { useDebounce } from '@/hooks/debounce';
import { useAppSelector } from '@/store';
import { useGetUsersQuery } from '@/store/gitHub/api';

export const Home = () => {
	const inputRef = useRef<HTMLInputElement | null>(null);
	const userElementRef = useRef<HTMLDivElement | null>(null);
	const [search, setSearch] = useState('');
	const debounce = useDebounce<string>(search, 400);
	const [isDown, setIsDown] = useState(debounce.length > 0);

	const { isSuccess, isFetching, isError, status, data } = useGetUsersQuery(debounce, {
		skip: debounce.length <= 3,
		refetchOnFocus: true,
	});

	const { favorites } = useAppSelector((state) => state.user);

	useEffect(() => {
		setIsDown(debounce.length > 3);
	}, [debounce]);

	useEffect(() => {
		const eventListener = (e: UIEvent) => {
			if (e.target === inputRef.current || e.target === userElementRef.current) return;
			setIsDown(false);
		};
		document.addEventListener('click', eventListener);
		return () => document.removeEventListener('click', eventListener);
	}, []);

	return (
		<>
			<h1 className="text-xl font-bold mb-5">Main</h1>
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
						className="absolute z-10 bg-white shadow-big
        top-[0px] left-0 right-0 max-h-[320px] overflow-y-auto rounded-[8px]"
					>
						{data?.map((user) => (
							<SearchUser
								key={user.id}
								{...{ user }}
								toggle={!!favorites.find((fav) => fav.id === user.id)?.login}
								onClick={(e) => {
									e.stopPropagation();
									userElementRef.current = e.currentTarget;
								}}
							/>
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
