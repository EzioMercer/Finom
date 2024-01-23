import styles from './Block.module.scss';
import JSXElement from '../../utils/types/JSXElement';

const Block = ({
	children,
	className
}: {
	children: JSXElement | JSXElement[],
	className?: string
}) => {
	return (
		<div className={ (className ?? '') + ' ' + styles.block }>
			{ children }
		</div>
	)
}

export default Block;