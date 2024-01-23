import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
import HeaderNavLink from './HeaderNavLink/HeaderNavLink';
import Button from '../general/Button/Button';
import ChooseCompany from './ChooseCompany/ChooseCompany';
import { useState } from 'react';

const Header = () => {
	const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

	return (
		<header className={ styles.header }>

			<div className={ styles.logo }>
				<Link to={ '/' }>
					<img src={`${ ASSETS_PATH }/images/icons/logo.png`} alt="logo" />
				</Link>
			</div>

			<div className={ styles.menu }>
				<div className={ styles['burger-menu'] + ' ' + (isBurgerMenuOpen ? styles.open : '') }>
					<div
						className={ styles.lines }
						onClick={() => setIsBurgerMenuOpen(!isBurgerMenuOpen)}
					>
						<div className={ styles.line }></div>
						<div className={ styles.line }></div>
						<div className={ styles.line }></div>
					</div>

					<div className={ styles['menu-items'] }>
						<nav>
							<ul>
								<li>
									<HeaderNavLink to={ 'money' } text={ 'Money' } />
								</li>
								<li>
									<HeaderNavLink to={ 'team' } text={ 'Team' } />
								</li>
								<li>
									<HeaderNavLink to={ 'cards' } text={ 'Cards' } />
								</li>
								<li>
									<HeaderNavLink to={ 'help-center' } text={ 'Help center' } />
								</li>
								<li>
									<HeaderNavLink
										to={ 'invite-your-partners' }
										text={ 'Invite your partners' }
										icon={ {
											src: `${ ASSETS_PATH }/images/icons/general/gift.png`,
											alt: 'gift',
											size: 24
										} }
									/>
								</li>
							</ul>
						</nav>

						<Button className={ styles['upgrade-plan'] } text={ 'Upgrade plan' } icon={ {
							src: `${ ASSETS_PATH }/images/icons/general/rocket.png`,
							alt: 'rocket',
							size: 16
						} } />

						<ChooseCompany />
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header;