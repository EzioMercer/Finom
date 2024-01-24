import styles from './Charges.module.scss';
import { Link } from 'react-router-dom';
import Block from '../../../../../components/Block/Block';
import { useState } from 'react';

const Charges = () => {
	const [activeTabIndex, setActiveTabIndex] = useState(0);

	const tabs = ['Limits', 'Invoices'];

	return (
		<Block className={ styles['charges'] }>
			<div className={ styles['tabs'] }>
				<ul>
					{
						tabs.map((tab, i) => <li
							key={ i }
							className={ activeTabIndex === i ? styles['active'] : '' }
							onClick={ () => setActiveTabIndex(i) }
						>
							{ tab }
						</li>)
					}
				</ul>
			</div>

			<div className={ [
				styles['body'],
				activeTabIndex === 0 ? styles['active'] : ''
			].join(' ') }>
				<div className={ styles['limit'] }>
					<div className={ styles['head'] }>
						<div className={ styles['name'] }>Team members</div>
						<div className={ styles['available'] }>
							3 <span className={ styles['total'] }> / 6</span>
						</div>
					</div>
					<div className={ styles['progress-bar'] }>
						<div className={ styles['back-line'] }></div>
						<div className={ styles['front-line'] }></div>
					</div>
					<div className={ styles['info'] }>
						Need more members? <Link to={ '#' }>Upgrade your plan</Link>
					</div>
				</div>

				<div className={ styles['limit'] }>
					<div className={ styles['head'] }>
						<div className={ styles['name'] }>Outgoing e-invoices</div>
						<div className={ styles['available'] }>
							<span className={ styles['total'] }>Unlimited</span>
						</div>
					</div>
					<div className={ styles['progress-bar'] }>
						<div className={ styles['back-line'] }></div>
						<div className={ styles['front-line'] }></div>
					</div>
					<div className={ styles['info'] }>
						Send as many e-invoices as you want
					</div>
				</div>

				<div className={ styles['limit'] }>
					<div className={ styles['head'] }>
						<div className={ styles['name'] }>Connected sources (banks)</div>
						<div className={ styles['available'] }>
							5 <span className={ styles['total'] }> / 5</span>
						</div>
					</div>
					<div className={ styles['progress-bar'] }>
						<div className={ styles['back-line'] }></div>
						<div className={ styles['front-line'] }></div>
					</div>
					<div className={ styles['info'] }>
						Need more banks to connect? <Link to={ '#' }>Upgrade your plan</Link>
					</div>
				</div>
			</div>

			<div className={ [
				styles['body'],
				activeTabIndex === 1 ? styles['active'] : ''
			].join(' ') }>
				<div className={ styles['limit'] }>
					<div className={ styles['head'] }>
						<div className={ styles['name'] }>Outgoing e-invoices</div>
						<div className={ styles['available'] }>
							<span className={ styles['total'] }>Unlimited</span>
						</div>
					</div>
					<div className={ styles['progress-bar'] }>
						<div className={ styles['back-line'] }></div>
						<div className={ styles['front-line'] }></div>
					</div>
					<div className={ styles['info'] }>
						Send as many e-invoices as you want
					</div>
				</div>

				<div className={ styles['limit'] }>
					<div className={ styles['head'] }>
						<div className={ styles['name'] }>Connected sources (banks)</div>
						<div className={ styles['available'] }>
							5 <span className={ styles['total'] }> / 5</span>
						</div>
					</div>
					<div className={ styles['progress-bar'] }>
						<div className={ styles['back-line'] }></div>
						<div className={ styles['front-line'] }></div>
					</div>
					<div className={ styles['info'] }>
						Need more banks to connect? <Link to={ '#' }>Upgrade your plan</Link>
					</div>
				</div>

				<div className={ styles['limit'] }>
					<div className={ styles['head'] }>
						<div className={ styles['name'] }>Team members</div>
						<div className={ styles['available'] }>
							3 <span className={ styles['total'] }> / 6</span>
						</div>
					</div>
					<div className={ styles['progress-bar'] }>
						<div className={ styles['back-line'] }></div>
						<div className={ styles['front-line'] }></div>
					</div>
					<div className={ styles['info'] }>
						Need more members? <Link to={ '#' }>Upgrade your plan</Link>
					</div>
				</div>
			</div>
		</Block>
	)
}

export default Charges;
