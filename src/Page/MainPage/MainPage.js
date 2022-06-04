import { Outlet } from 'react-router-dom'
import { Footer } from '../../componets/footer/Footer'
import { Header } from '../../componets/header/Header'

function MainPage() {
	return (
		<>
			<header>
				<Header />
			</header>
			<Outlet />
			<footer>
				<Footer />
			</footer>
		</>
	)
}
export default MainPage
