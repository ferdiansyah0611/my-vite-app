import React, { useState } from 'react'
import {
  Link
} from 'react-router-dom'
import s from '../sass/Navbar.module.sass'

interface _menu{
	title: string,
	link: string
}

type __menu = {
	title: string,
	link: string
}[]

const Navbar = () => {
	const [menu, setmenu] = useState<__menu>([
		{title: 'Tentang Kami', link: '/about'},
		{title: 'Kontak', link: '/contact'},
		{title: 'Pertanyaan', link: '/faq'},
		{title: 'Harga', link: '/pricing'},
	])
	const [status, setstatus] = useState<boolean>(false)
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
						<Link className={s.title} to="/">Fairy Tech</Link>
					</div>
					<div>
						{menu.map((d: _menu, i: number) => {
							return(
								<Link key={i} to={d.link}>{d.title}</Link>
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
					{menu.map((d: _menu, i: number) => {
						return(
							<Link key={i} to={d.link}>{d.title}</Link>
						)
					})}
				</nav>
			</div>
			<div onClick={handleStatus} className={status ? s.open: ''}></div>
		</>
	)
}

export default Navbar