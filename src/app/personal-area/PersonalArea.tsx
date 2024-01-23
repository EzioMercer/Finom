import styles from './PersonalArea.module.scss';
import { NavLink, Outlet } from 'react-router-dom';
import Block from '../../components/Block/Block';

const PersonalArea = () => {
	return (
		<div className={ styles['personal-area'] }>
			<Block className={ styles.navigation }>
				<div className={ styles['list'] }>
					<div className={ styles['list-heading'] }>
						Personal
					</div>
					<ul>
						<li>
							<NavLink to={ 'profile' }>Profile</NavLink>
						</li>
						<li>
							<NavLink to={ 'security' }>Security</NavLink>
						</li>
						<li>
							<NavLink to={ 'notifications' }>Notifications</NavLink>
						</li>
					</ul>
				</div>
				<div className={ styles['list'] }>
					<div className={ styles['list-heading'] }>
						Tesla S.R.L.
					</div>
					<ul>
						<li>
							<NavLink to={ 'business-profile' }>Business profile</NavLink>
						</li>
						<li>
							<NavLink to={ 'e-invoicing' }>E-invoicing</NavLink>
						</li>
						<li>
							<NavLink to={ 'plan-and-limits' }>Plan and limits</NavLink>
						</li>
						<li>
							<NavLink to={ 'team' }>Team</NavLink>
						</li>
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