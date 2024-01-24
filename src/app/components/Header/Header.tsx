import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
import Button from '../../../components/Button/Button';
import ChooseCompany from './ChooseCompany/ChooseCompany';
import { useState } from 'react';
import NavigationLink from '../../../components/NavigationLink/NavigationLink';

const Header = () => {
	const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

	return (
		<header className={ styles.header }>

			<div className={ styles.logo }>
				<Link to={ '/' }>
					<img src={ `${ ASSETS_PATH }/images/icons/logo.png` } alt="logo" />
				</Link>
			</div>

			<div className={ styles.menu }>
				<div className={ styles['burger-menu'] + ' ' + (isBurgerMenuOpen ? styles.open : '') }>
					<div
						className={ styles.lines }
						onClick={ () => setIsBurgerMenuOpen(!isBurgerMenuOpen) }
					>
						<div className={ styles.line }></div>
						<div className={ styles.line }></div>
						<div className={ styles.line }></div>
					</div>

					<div className={ styles['menu-items'] }>
						<nav>
							<ul>
								<NavigationLink to={ 'money' } text={ 'Money' } />
								<NavigationLink to={ 'team' } text={ 'Team' } />
								<NavigationLink to={ 'cards' } text={ 'Cards' } />
								<NavigationLink to={ 'help-center' } text={ 'Help center' } />
								<NavigationLink
									to={ 'invite-your-partners' }
									text={ 'Invite your partners' }
									icon={ {
										src: `${ ASSETS_PATH }/images/icons/general/gift.png`,
										alt: 'gift',
										size: 24
									} }
								/>
							</ul>
						</nav>

						<Button className={ styles['upgrade-plan'] } icon={ {
							src: `${ ASSETS_PATH }/images/icons/general/rocket.png`,
							alt: 'rocket',
							size: 16
						} }>
							Upgrade plan
						</Button>

						<ChooseCompany />
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header;