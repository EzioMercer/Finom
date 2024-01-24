import styles from './PersonalArea.module.scss';
import { Outlet } from 'react-router-dom';
import Block from '../../components/Block/Block';
import NavigationLink from '../../components/NavigationLink/NavigationLink';

const PersonalArea = () => {
	return (
		<div className={ styles['personal-area'] }>
			<Block className={ styles.navigation }>
				<div className={ styles['list'] }>
					<div className={ styles['list-heading'] }>
						Personal
					</div>
					<ul>
						<NavigationLink
							activeClassName={ styles['active'] }
							to={ 'profile' }
							text={ 'Profile' }
						/>
						<NavigationLink
							activeClassName={ styles['active'] }
							to={ 'security' }
							text={ 'Security' }
						/>
						<NavigationLink
							activeClassName={ styles['active'] }
							to={ 'notifications' }
							text={ 'Notifications' }
						/>
					</ul>
				</div>
				<div className={ styles['list'] }>
					<div className={ styles['list-heading'] }>
						Tesla S.R.L.
					</div>
					<ul>
						<NavigationLink
							activeClassName={ styles['active'] }
							to={ 'business-profile' }
							text={ 'Business profile' }
						/>
						<NavigationLink
							activeClassName={ styles['active'] }
							to={ 'e-invoicing' }
							text={ 'E-invoicing' }
						/>
						<NavigationLink
							activeClassName={ styles['active'] }
							to={ 'plan-and-limits' }
							text={ 'Plan and limits' }
						/>
						<NavigationLink
							activeClassName={ styles['active'] }
							to={ 'team' }
							text={ 'Team' }
						/>
					</ul>
				</div>
			</Block>
			<div className={ styles['pages'] }>
				<Outlet />
			</div>
		</div>
	)
}

export default PersonalArea;