import { useEffect, useState } from 'react';

import { InputUI } from '@/components/InputUI';
import { SearchUser } from '@/components/SearchUser';
import { useDebounce } from '@/hooks/debounce';
import { useGetUsersQuery } from '@/store/gitHub/api';

export function Home() {
	const [search, setSearch] = useState('');
	const debounce = useDebounce<string>(search, 400);
	const [isDown, setIsDown] = useState(debounce.length > 0);

	const { isSuccess, isFetching, isError, status, data } = useGetUsersQuery(debounce, {
		skip: debounce.length <= 3,
		refetchOnFocus: true,
	});

	useEffect(() => {
		setIsDown(debounce.length > 3);
	}, [debounce]);

	return (
		<>
			<InputUI
				value={search}
				placeholder="Search github users"
				onChange={(e) => setSearch(e.target.value)}
				onFocus={() => setIsDown(search.length >= 3)}
				onBlur={() => setIsDown(false)}
				onClear={() => setSearch('')}
			>
				{isDown && !isFetching && isSuccess && (
					<div
						className="absolute z-10 bg-white shadow-big cursor-pointer
        top-[40px] left-0 right-0 max-h-[320px] overflow-y-scroll rounded-[8px]"
					>
						{data?.map((user) => <SearchUser key={user.id} {...{ user }} />)}
					</div>
				)}
			</InputUI>

			<div className="p-5 font-mono">
				{isError && <p>Status: {status}</p>}
				{isFetching && <p>Users loading...</p>}
				{!isFetching && data?.length === 0 && isSuccess && <p>{`The search did't take any results`}</p>}
			</div>
		</>
	);
}

export default Home;
