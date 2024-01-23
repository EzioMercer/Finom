import styles from './PlanAndLimits.module.scss';
import PlanBlock from './components/PlanBlock/PlanBlock';
import Charges from './components/Charges/Charges';

const PlanAndLimits = () => {
	return (
		<div className={ styles['plan-and-limits'] }>
			<PlanBlock />
			<Charges />
		</div>
	)
}

export default PlanAndLimits;