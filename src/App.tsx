import { Link, Route, Routes } from 'react-router-dom';

import { Favorites } from '@/pages/Favorites';
import { Home } from '@/pages/Home';
import { UserPage } from '@/pages/User';

export const App = () => (
	<>
		<div className="container m-auto flex flex-nowrap items-center gap-10 justify-between p-10 pt-5 pb-0">
			<div>
				<h1
					className="font-bold w-full text-5xl pb-1
                bg-gradient-to-l from-red-300 via-yellow-400 to-emerald-600 bg-clip-text text-transparent"
				>
					GitHUB users
				</h1>
				<h2 className="text-2xl">Redux Toolkit for GitHub API</h2>
			</div>
			<nav className="flex flex-nowrap gap-12 mt-4 mb-4 font-mono font-bold">
				<Link to="/">Main</Link>
				<Link to="/favorites">Favorites</Link>
			</nav>
		</div>
		<div className="container m-auto p-10 pt-7">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/favorites" element={<Favorites />} />
				<Route path="/user" element={<UserPage />} />
			</Routes>
		</div>
	</>
);

export default App;
