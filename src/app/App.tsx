import styles from './App.module.scss';
import Header from '../components/Header/Header';
import { Outlet } from 'react-router-dom';

const App = () => {
	return (
		<>
			<Header />
			<main className={ styles.main }>
				<Outlet />
			</main>
		</>
	)
}

export default App;