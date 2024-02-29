import { ResponseUser } from '@/modules/interfaces';

export const SearchUser = ({ user }: { user: ResponseUser }) => (
	<div className="flex items-center ps-5 pt-3 pb-3 hover:bg-slate-100" key={user.id}>
		<img src={user.avatar_url} alt={user.gravatar_id} className="w-[40px] mr-2 rounded-full" />
		<div className="flex flex-col">
			<div className="flex gap-4 items-center">
				<span className="font-bold text-lg">{user.login}</span>
				<span className="text-sm text-green-600">{user.type}</span>
			</div>
			<span>{user.html_url}</span>
		</div>
	</div>
);
export default SearchUser;
