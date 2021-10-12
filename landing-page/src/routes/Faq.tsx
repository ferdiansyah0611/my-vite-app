import React, { useEffect, useState } from 'react'

import { question } from '../firestore'
// style
import s from '../sass/Faq.module.sass'

function Faq() {
	const [input, setinput] = useState({
		name: '',
		email: '',
		question: ''
	})
	useEffect(() => {
		window.scrollTo(0,0)
	}, [])
	let send = () => {
		// question.add(input)
	},
	in_change = (e: any) => {
		const { name, value } = e.target
		setinput({...input, [name]: value})
	}
	return(
		<section className={s.body}>
			<div>
				<section className={s.faq_1}>
					<div>
						<h2>Apakah yang ingin anda sampaikan kepada kami</h2>
						<form action="">
							<div className={s.wrap}>
								<label htmlFor="username">Username</label>
								<input onChange={in_change} required={true} tabIndex={0} name="name" autoComplete="off" id="username" placeholder="Required *" type="text"/>
							</div>
							<div className={s.wrap}>
								<label htmlFor="email">Email</label>
								<input onChange={in_change} required={true} tabIndex={1} name="email" autoComplete="off" id="email" placeholder="Required *" type="text"/>
							</div>
							<div className={s.wrap}>
								<label htmlFor="description">Pertanyaan Anda</label>
								<textarea onChange={in_change} required={true} tabIndex={2} name="question" id="description" placeholder="Required *"></textarea>
							</div>
							<button type="button">Kirim</button>
						</form>
					</div>
				</section>
			</div>
		</section>
	)
}

export default Faq