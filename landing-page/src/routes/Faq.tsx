import React, { useEffect } from 'react'
import s from '../sass/Faq.module.sass'

function Faq() {
	useEffect(() => {
		window.scrollTo(0,0)
	}, [])
	return(
		<section className={s.body}>
			<div>
				<section className={s.faq_1}>
					<div>
						<h2>Apakah yang ingin anda sampaikan kepada kami</h2>
						<form action="">
							<div className={s.wrap}>
								<label htmlFor="username">Username</label>
								<input required={true} tabIndex={0} autoComplete="off" id="username" placeholder="Required *" type="text"/>
							</div>
							<div className={s.wrap}>
								<label htmlFor="email">Email</label>
								<input required={true} tabIndex={1} autoComplete="off" id="email" placeholder="Required *" type="text"/>
							</div>
							<div className={s.wrap}>
								<label htmlFor="description">Pertanyaan Anda</label>
								<textarea required={true} tabIndex={2} name="description" id="description" placeholder="Required *"></textarea>
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