import { Router, Routes } from 'react-router-dom'
import { About } from '../../Page/About/About'
import { Blog } from '../../Page/blog/Blog'
import { Home } from '../../Page/Home/Home'
import { FooterLayout } from './FooterLayout'

const Footer = () => {
	return (
		<>
			<Routes>
				<Router path='/' element={<FooterLayout />}>
					<Router index element={<Home />} />
					<Router path='about' element={<About />} />
					<Router path='blog' element={<Blog />} />
				</Router>
			</Routes>
		</>
	)
}

export { Footer }
