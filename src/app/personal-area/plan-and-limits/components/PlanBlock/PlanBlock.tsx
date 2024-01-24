import styles from './PlanBlock.module.scss';
import { Link } from 'react-router-dom';
import Button from '../../../../../components/Button/Button';
import Block from '../../../../../components/Block/Block';
import { useState } from 'react';

const PlanBlock = () => {
	const [isFeaturesClosed, setIsFeaturesClosed] = useState(false);

	return (
		<Block className={ styles['plan-block'] }>
			<div className={ styles['invoicing'] }>
				<div className={ styles['head'] }>
					<div className={ styles['name'] }>
						Invoicing start
					</div>
					<Link to={ '#' } className={ styles['change-plan'] }>
						Change plan
					</Link>
				</div>
				<div className={ styles['price'] }>
					6,99 € <span className={ styles['frequency'] }>/mo</span>
				</div>
				<div className={ styles['charge-info'] }>
					<div className={ styles['charge-date'] }>
						We’ll charge 6,99 € on Jul 24, 2020
					</div>
					<div className={ styles['payment-method'] }>
						Change card *** 5423 or billing info
					</div>
				</div>
				<div className={ styles['annual-plan'] }>
					<Button className={ styles['switch-button'] }>
						Switch to annual plan
					</Button>
					<div className={ styles['benefits'] }>
						and save 24,00 € a year
					</div>
				</div>
			</div>

			<div className={ [
				styles['features'],
				isFeaturesClosed ? styles['close'] : ''
			].join(' ') }>
				<div className={ styles['head'] }>
					<span>Explore new features</span>
					<img src={ `${ ASSETS_PATH }/images/icons/general/dizzy.png` } alt="star" />
				</div>
				<div className={ styles['recommended-plan'] }>
					<div className={ styles['features-info'] }>
						<div className={ styles['name'] }>
							Invoicing Premium
						</div>

						<ul>
							<li>Unlimited outgoing e-invoices</li>
							<li>Unlimited connected banks</li>
							<li>10 users</li>
							<li>Expense management</li>
						</ul>
					</div>

					<div className={ styles['price-info'] }>
						<img
							src={ `${ ASSETS_PATH }/images/icons/general/close.svg` }
							alt="close"
							onClick={ () => setIsFeaturesClosed(true) }
						/>
						<div className={ styles['price'] }>
							€20.99 /mo
						</div>
						<div className={ styles['charge-info'] }>
							billed annually or 24.99 €
							<br />
							billed monthly
						</div>

						<Button className={ styles['upgrade'] }>
							Upgrade
						</Button>
					</div>
				</div>
			</div>
		</Block>
	)
}

export default PlanBlock;
