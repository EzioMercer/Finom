import styles from './NavigationLink.module.scss';
import { NavLink } from 'react-router-dom';
import { IconProps } from '../Icon/Icon';
import JSXElement from '../../utils/types/JSXElement';
import isUndefined from '../../utils/functions/checks/isUndefined';
import { useState } from 'react';

export type NavigationLinkProps = {
	to: string;
	text: string;
	className?: string;
	activeClassName?: string
}

type GeneralNavigationLinkProps = NavigationLinkProps & {
	icon?: IconProps;
}

const NavigationLink = ({
	to,
	text,
	className,
	activeClassName,
	icon
}: GeneralNavigationLinkProps) => {
	const [isActive, setIsActive] = useState(false);
	const classNameHandler = ({ isActive }: { isActive: boolean }) => {
		setIsActive(isActive);

		return styles['header-nav-link'];
	}

	const navLinkWrapper = (navLink: JSXElement): JSXElement => isUndefined(icon) ?
		navLink :
		<div className={ styles['with-icon'] }>
			<img src={ icon.src } alt={ icon.alt } width={ `${ icon.size }px` } />
			{ navLink }
		</div>

	return (
		<li className={ [
			className ?? '',
			isActive ? [
				styles['active'],
				activeClassName ?? ''
			].join(' ') : ''
		].join(' ') }
		>
			{
				navLinkWrapper(
					<NavLink className={ classNameHandler } to={ to } data-text={ text }>
						<span>{ text }</span>
					</NavLink>
				)
			}
		</li>
	)
}

export default NavigationLink;
