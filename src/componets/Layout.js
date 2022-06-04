import { CustomLink } from './CustomLink'

const Layout = () => {
	return (
		<>
			<header className='menu'>
				<CustomLink
					to='/'
					className={({ isActive }) => (isActive ? 'active-link' : ' ')}
				>
					Home
				</CustomLink>
				<CustomLink
					to='/posts'
					className={({ isActive }) => (isActive ? 'active-link' : ' ')}
				>
					Blog
				</CustomLink>
				<CustomLink
					to='/about'
					className={({ isActive }) => (isActive ? 'active-link' : ' ')}
				>
					About
				</CustomLink>
			</header>
		</>
	)
}
export { Layout }
