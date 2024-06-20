import '@/styles/style.css';

import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { Favorites, Home, UIPage } from '@/pages';
import { store } from '@/store';

import { App } from './App';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: '/favorites',
				element: <Favorites />,
			},
			{
				path: '/ui',
				element: <UIPage />,
			},
		],
	},
]);

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	</React.StrictMode>,
);
