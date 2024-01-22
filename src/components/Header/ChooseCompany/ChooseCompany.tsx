import styles from './ChooseCompany.module.scss';
import Block from '../../general/Block/Block';
import { useRef, useState } from 'react';

const ChooseCompany = () => {
	const ref = useRef(null);
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => setIsOpen(!isOpen);
	const close = () => setIsOpen(false);

	return (
		<div
			className={ styles['choose-company'] + ' ' + (isOpen && styles['open']) }
			tabIndex={ 0 }
			onClick={ toggle }
			onBlur={ close }
			ref={ref}
		>
			<div className={ styles['selected-logo'] }>T</div>
			<div className={ styles['selected-name'] }>Tesla S.R.L.</div>

			{
				isOpen && <Block className={ styles.block }>
					<ul>
						{
							new Array(4).fill(0)
								.map((_x, i) => <li onClick={ close } key={i}>
									<div className={ styles['company-logo'] }>T</div>
									<div className={ styles['company-name'] }>Tesla S.R.L.</div>
								</li>)
						}
					</ul>
				</Block>
			}
		</div>
	)
}

export default ChooseCompany;