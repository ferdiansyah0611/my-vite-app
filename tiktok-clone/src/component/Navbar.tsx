import React, {
	useState
} from 'react'
import DialogLogin from './DialogLogin'
import {
	Link, useHistory
} from 'react-router-dom'

import s from '../style/Navbar.module.scss'

interface Event{
	preventDefault: any
}

export default function Navbar() {
	const nav = useHistory()
	const [login, setlogin] = useState(false)
	const [search, setsearch] = useState('')
	let changeDialog = (e: Event) => {
    e.preventDefault()
    setlogin(login ? false: true)
  },
  searchKey = (e: any) => {
  	setsearch(e.target.value)
  	if(e.keyCode === 13){
  		nav.push('/query/' + search)
  	}
  }
	return(
		<>
			{/*<DialogLogin onClose={changeDialog} open={login} />*/}
			<nav className={s.navbar}>
		  	<div>
		  		<Link className="title" to="/">TikTok</Link>
		  	</div>
		  	<div>
		  		<input onKeyUp={searchKey} placeholder="Search Video" type="text"/>
		  	</div>
		  	<div>
		  		<a href="/">Upload</a>
		  		<Link to="/login">Login</Link>
		  	</div>
	  	</nav>
	    <div className={s.bottom_nav}>
	    	<a href="/">
	    		<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
					</svg>
	    	</a>
	    	<a href="/">
	    		<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
					</svg>
	    	</a>
	    	<a href="/">
	    		<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
					</svg>
	    	</a>
	    	<a href="/">
	    		<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
					</svg>
	    	</a>
	    	<a href="/">
	    		<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
					</svg>
	    	</a>
	    </div>
    </>
	)
}