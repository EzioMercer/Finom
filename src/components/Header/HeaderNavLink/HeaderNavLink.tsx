import styles from './HeaderNavLink.module.scss';
import { NavLink } from 'react-router-dom';
import isUndefined from '../../../utils/functions/checks/isUndefined';
import { IconProps } from '../../general/Icon/Icon';
import JSXElement from '../../../utils/types/JSXElement';
import { NavigationLinkProps } from '../../general/NavigationLink/NavigationLink';

type HeaderNavLinkProps = NavigationLinkProps & {
	icon?: IconProps;
}

const HeaderNavLink = ({
	to,
	text,
	icon
}: HeaderNavLinkProps) => {
	const classNameHandler = ({ isActive }: { isActive: boolean }) => {
		return [
			styles['header-nav-link'],
			isActive ? styles['active'] : ''
		].join(' ')
	}

	const navLinkWrapper = (navLink: JSXElement): JSXElement => isUndefined(icon) ?
		navLink :
		<div className={ styles['with-icon'] }>
			<img src={icon.src} alt={icon.alt} width={ `${icon.size}px` } />
			{navLink}
		</div>

	return navLinkWrapper(
		<NavLink className={ classNameHandler } to={ to } data-text={ text }>
			<span>{ text }</span>
		</NavLink>
	)
}

export default HeaderNavLink;