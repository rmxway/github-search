import { ButtonUI, LinkUI } from '@/components/ui';
import { useAppDispatch, useAppSelector, usersSelector } from '@/store';
import { removeFromFavorites } from '@/store/reducer/user';

export const Favorites = () => {
	const { favorites } = useAppSelector(usersSelector);
	const dispatch = useAppDispatch();

	return (
		<div>
			<h1 className="text-xl font-bold mb-5">Favorites</h1>
			{favorites.length ? (
				<ul>
					{favorites?.map((fav) => (
						<li key={fav.id} className="flex items-center gap-3 mb-6">
							<img src={fav.avatar_url} alt={fav.avatar_url} className="w-[50px] rounded-full" />
							<div className="flex flex-col">
								<span className="font-bold">{fav.login}</span>
								<LinkUI href={fav.html_url} target="_blank">
									{fav.html_url}
								</LinkUI>
							</div>
							<ButtonUI className="ml-5" onClick={() => dispatch(removeFromFavorites(fav.id as number))}>
								Remove
							</ButtonUI>
						</li>
					))}
				</ul>
			) : (
				<p>
					Not added to favorites yet. Go to <LinkUI href="/">main page</LinkUI> and search the best
					repositories
				</p>
			)}
		</div>
	);
};

export default Favorites;
