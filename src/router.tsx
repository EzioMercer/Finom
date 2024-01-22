import { createBrowserRouter, redirect } from 'react-router-dom';
import App from './app/App';

const lazyLoadPage = (path: string) => async () => {
	const pathFolders = path.split('/');
	const targetFolderName = pathFolders[pathFolders.length - 1] as string;
	const targetFileName = targetFolderName
		.split('-')
		.map(x => (x[0] as string).toUpperCase() + x.slice(1))
		.join('');

	const Page = await import(`./app/${ path }/${ targetFileName }.tsx`);

	return { Component: Page.default }
}

const router = createBrowserRouter([
	{
		path: '/',
		loader: () => redirect('personal-area'),
	},
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: 'personal-area',
				loader: () => redirect('plan-and-limits')
			},
			{
				path: 'personal-area',
				lazy: lazyLoadPage('personal-area'),
				children: [
					{
						path: 'business-profile',
						lazy: lazyLoadPage('personal-area/business-profile')
					},
					{
						path: 'e-invoicing',
						lazy: lazyLoadPage('personal-area/e-invoicing')
					},
					{
						path: 'notifications',
						lazy: lazyLoadPage('personal-area/notifications')
					},
					{
						path: 'plan-and-limits',
						lazy: lazyLoadPage('personal-area/plan-and-limits')
					},
					{
						path: 'profile',
						lazy: lazyLoadPage('personal-area/profile')
					},
					{
						path: 'security',
						lazy: lazyLoadPage('personal-area/security')
					},
					{
						path: 'team',
						lazy: lazyLoadPage('personal-area/team')
					}
				]
			},
			{
				path: 'cards',
				lazy: lazyLoadPage('cards')
			},
			{
				path: 'help-center',
				lazy: lazyLoadPage('help-center')
			},
			{
				path: 'invite-your-partners',
				lazy: lazyLoadPage('invite-your-partners')
			},
			{
				path: 'money',
				lazy: lazyLoadPage('money')
			},
			{
				path: 'team',
				lazy: lazyLoadPage('team')
			},
			{
				path: 'upgrade-plan',
				lazy: lazyLoadPage('upgrade-plan')
			}
		]
	}
])

export default router;