import { AnimatePresence, LayoutGroup, motion } from 'framer-motion';

import { ButtonUI, LinkUI } from '@/components/ui';
import { useAppDispatch, useAppSelector, usersSelector } from '@/store';
import { removeFromFavorites } from '@/store/reducer/user';
import { variantsFavorite } from '@/styles/variants';

export const Favorites = () => {
	const { favorites } = useAppSelector(usersSelector);
	const dispatch = useAppDispatch();

	return (
		<div>
			<LayoutGroup>
				<h1 className="text-xl font-bold mb-5">Favorites</h1>
				<motion.ul>
					<AnimatePresence mode="popLayout">
						{favorites?.map((fav, idx) => (
							<motion.li
								key={fav.id}
								layout
								variants={variantsFavorite}
								transition={{
									duration: 1,
									type: 'spring',
									stiffness: 300,
									delay: 0.03 * idx,
									damping: 25,
								}}
								initial="hidden"
								animate="visible"
								exit="hidden"
								className="flex items-center gap-3 mb-6"
							>
								<img src={fav.avatar_url} alt={fav.avatar_url} className="w-[50px] rounded-full" />
								<div className="flex flex-col">
									<span className="font-bold">{fav.login}</span>
									<LinkUI href={fav.html_url} target="_blank">
										{fav.html_url}
									</LinkUI>
								</div>
								<ButtonUI
									className="ml-5"
									onClick={() => dispatch(removeFromFavorites(fav.id as number))}
								>
									Remove
								</ButtonUI>
							</motion.li>
						))}
					</AnimatePresence>
				</motion.ul>
				{favorites.length === 0 && (
					<motion.p layout variants={variantsFavorite} initial="hidden" animate="visible" exit="hidden">
						Not added to favorites yet. Go to <LinkUI href="/">main page</LinkUI> and search the best
						repositories
					</motion.p>
				)}
			</LayoutGroup>
		</div>
	);
};

export default Favorites;
