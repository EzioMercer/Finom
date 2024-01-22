import styles from './Button.module.scss';
import isUndefined from '../../../utils/functions/checks/isUndefined';
import Icon, { IconProps } from '../Icon/Icon';

const Button = ({
	text,
	className,
	icon
}: {
	text: string,
	className?: string,
	icon?: IconProps
}) => {

	const iconEl = isUndefined(icon) ? null : <Icon icon={ icon } />

	return (
		<button className={ (className ?? '') + ' ' + styles.button }>
			{ iconEl }
			{ text }
		</button>
	)
}

export default Button;