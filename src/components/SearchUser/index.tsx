import { HTMLAttributes, useState } from 'react';

import { ButtonUI } from '@/components/ui';
import { ResponseUser } from '@/modules/interfaces';
import { useAppDispatch } from '@/store';
import { addToFavorites, removeFromFavorites } from '@/store/reducer/user';

interface SearchUserProps extends HTMLAttributes<HTMLDivElement> {
	user: ResponseUser;
	toggle: boolean;
}

export const SearchUser = ({ user, toggle = false, ...props }: SearchUserProps) => {
	const [isFav, setIsFav] = useState<boolean>(toggle);
	const dispatch = useAppDispatch();

	const handleToggleFavorites = () => {
		setIsFav((prev) => !prev);
		!isFav ? dispatch(addToFavorites(user)) : dispatch(removeFromFavorites(user.id));
	};

	return (
		<div className="flex items-center ps-5 pt-3 pb-3 hover:bg-slate-100 transition gap-4" {...props}>
			<img src={user.avatar_url} alt={user.gravatar_id} className="w-[40px] rounded-full" />
			<div className="flex flex-col">
				<div className="flex gap-4 items-center">
					<span className="font-bold text-lg">{user.login}</span>
					<span className="text-sm text-green-600">{user.type}</span>
				</div>
				<span>{user.html_url}</span>
			</div>
			<div>
				<ButtonUI success={isFav} onClick={handleToggleFavorites} className="w-[90px]">
					{isFav ? 'like it' : 'favorite'}
				</ButtonUI>
			</div>
		</div>
	);
};
export default SearchUser;
