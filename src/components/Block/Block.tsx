import styles from './Block.module.scss';
import Children from '../../utils/types/Children';

const Block = ({
	children,
	className
}: {
	children: Children,
	className?: string
}) => {
	return (
		<div className={ (className ?? '') + ' ' + styles.block }>
			{ children }
		</div>
	)
}

export default Block;