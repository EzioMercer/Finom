import { createBrowserRouter } from 'react-router-dom';
import App from './app/App';
// import Cards from './app/cards/Cards';
// import HelpCenter from './app/help-center/HelpCenter';
// import InviteYourPartners from './app/invite-your-partners/InviteYourPartners';
// import Money from './app/money/Money';
// import Team from './app/team/Team';
// import UpgradePlan from './app/upgrade-plan/UpgradePlan';

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
		element: <App />,
		children: [
			{
				index: true,
				// element: <PersonalArea />
				lazy: lazyLoadPage('personal-area')
			},
			{
				path: 'cards',
				lazy: lazyLoadPage('cards'),
				// element: <Cards />
			},
			{
				path: 'help-center',
				lazy: lazyLoadPage('help-center'),
				// element: <HelpCenter />
			},
			{
				path: 'invite-your-partners',
				lazy: lazyLoadPage('invite-your-partners'),
				// element: <InviteYourPartners />
			},
			{
				path: 'money',
				lazy: lazyLoadPage('money'),
				// element: <Money />
			},
			{
				path: 'team',
				lazy: lazyLoadPage('team'),
				// element: <Team />
			},
			{
				path: 'upgrade-plan',
				lazy: lazyLoadPage('upgrade-plan'),
				// element: <UpgradePlan />
			}
		]
	}
])

export default router;