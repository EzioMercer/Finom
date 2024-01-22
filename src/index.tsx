import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';
import { RouterProvider } from 'react-router-dom';
import router from './router';
import isUndefined from './utils/functions/checks/isUndefined';

(() => {
	const link = ({ rel, type, sizes, href }) => {
		const link = document.createElement('link');

		link.setAttribute('rel', rel);
		link.setAttribute('sizes', sizes);
		link.setAttribute('href', href);

		if (!isUndefined(type)) link.setAttribute('type', type);

		return link;
	}

	const appleFavicon = size => link({
		rel: 'apple-touch-icon',
		sizes: `${ size }x${ size }`,
		href: `${ PROJECT_NAME }/assets/images/icons/favicon/apple-icon-${ size }x${ size }.png`
	})

	const androidFavicon = size => link({
		rel: 'icon',
		sizes: `${ size }x${ size }`,
		type: 'image/png',
		href: `${ PROJECT_NAME }/assets/images/icons/favicon/android-icon-${ size }x${ size }.png`
	})

	const favicon = size => link({
		rel: 'icon',
		sizes: `${ size }x${ size }`,
		type: 'image/png',
		href: `${ PROJECT_NAME }/assets/images/icons/favicon/favicon-${ size }x${ size }.png`
	})


	const fragment = new DocumentFragment();

	[
		appleFavicon(57),
		appleFavicon(60),
		appleFavicon(72),
		appleFavicon(76),
		appleFavicon(114),
		appleFavicon(120),
		appleFavicon(144),
		appleFavicon(152),
		appleFavicon(180),
		androidFavicon(192),
		favicon(32),
		favicon(96),
		favicon(16)
	].forEach(link => fragment.append(link))

	document.head.append(fragment);
})()

const rootContainer = document.querySelector('#root');

if (rootContainer === null) throw new Error('Please specify a root container');

createRoot(rootContainer).render(
	<StrictMode>
		<RouterProvider router={ router }></RouterProvider>
	</StrictMode>
);
