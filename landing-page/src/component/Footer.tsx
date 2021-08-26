import React from 'react'
import s from '../sass/Footer.module.sass'

const Footer = () => {
	return(
		<footer className={s.main}>
			<div>
				<p>{new Date().getFullYear()} All right Reserved</p>
			</div>
			<div className={s.right}>
				<p>ferdiansyah0611</p>
			</div>
		</footer>
	)
}

export default Footer