import styles from './NavigationLink.module.scss';
import { NavLink } from 'react-router-dom';

export type NavigationLinkProps = {
	to: string;
	text: string;
}

const NavigationLink = ({
	to,
	text
}: NavigationLinkProps) => {
	const classNameHandler = ({ isActive }: { isActive: boolean }) => {
		return [
			styles['header-nav-link'],
			isActive ? styles['active'] : ''
		].join(' ')
	}

	return (
		<NavLink className={ classNameHandler } to={ to } data-text={ text }>
			<span>{ text }</span>
		</NavLink>
	)
}

export default NavigationLink;
