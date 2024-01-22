import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';
import { RouterProvider } from 'react-router-dom';
import router from './router';

const rootContainer = document.querySelector('#root');

if (rootContainer === null) throw new Error('Please specify a root container');

createRoot(rootContainer).render(
	<StrictMode>
		<RouterProvider router={ router }></RouterProvider>
	</StrictMode>
);
