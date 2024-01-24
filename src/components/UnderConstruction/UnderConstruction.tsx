import styles from './UnderConstruction.module.scss';
import { Link } from 'react-router-dom';
import Block from '../Block/Block';

const UnderConstruction = () => {
	return (
		<Block className={ styles['under-construction'] }>
			<img src={ `${ASSETS_PATH}/images/icons/general/under-construction.svg` } alt="under-construction" />
			This page is under construction. Please visit &nbsp; <Link to={ '/' }> personal area page</Link>
		</Block>
	)
}

export default UnderConstruction;