import styles from './Button.module.scss';
import isUndefined from '../../../utils/functions/checks/isUndefined';
import Icon, { IconProps } from '../Icon/Icon';
import Children from '../../../utils/types/Children';

const Button = ({
	children,
	className,
	icon
}: {
	children: Children,
	className?: string,
	icon?: IconProps
}) => {

	const iconEl = isUndefined(icon) ? null : <Icon icon={ icon } />

	return (
		<button className={ (className ?? '') + ' ' + styles.button }>
			{ iconEl }
			{ children }
		</button>
	)
}

export default Button;