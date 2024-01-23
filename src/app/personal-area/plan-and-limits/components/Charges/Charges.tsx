import styles from './Charges.module.scss';
import { Link } from 'react-router-dom';
import Block from '../../../../../components/Block/Block';

const Charges = () => {
	return (
		<Block className={ styles['charges'] }>
			<div className={ styles['tabs'] }>
				<ul>
					<li>Limits</li>
					<li>Invoices</li>
				</ul>
			</div>
			<div className={ styles['body'] }>
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
		</Block>
	)
}

export default Charges;
