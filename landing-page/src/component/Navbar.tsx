import React, { useState } from 'react'
import s from '../sass/Navbar.module.sass'

const Navbar = () => {
	const [menu, setmenu] = useState([
		'Lokasi', 'Tentang Kami', 'Kontak', 'Pertanyaan'
	])
	const [status, setstatus] = useState(false)
	let handleStatus = (e: any) => {
		e.preventDefault()
		if(!status){
			document.querySelector('#menu').setAttribute('style', 'margin-right: 0 !important;')
		}else{
			document.querySelector('#menu').removeAttribute('style')
		}
		setstatus(status ? false: true)
	}
	return(
		<>
			<nav className={s.navbar}>
				<div>
					<div>
						<a className={s.title} href="/">Fairy Tech</a>
					</div>
					<div>
						{menu.map((d, i) => {
							return(
								<a key={i} href="/">{d}</a>
							)
						})}
					</div>
					<div>
						<a onClick={handleStatus} href="/">
							<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
							</svg>
						</a>
					</div>
				</div>
			</nav>
			<div id="menu" className={s.menu}>
				<nav>
					{menu.map((d, i) => {
						return(
							<a key={i} href="/">{d}</a>
						)
					})}
				</nav>
			</div>
			<div onClick={handleStatus} className={status ? s.open: ''}></div>
		</>
	)
}

export default Navbar