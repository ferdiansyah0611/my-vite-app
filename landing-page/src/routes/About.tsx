import React, { useEffect } from 'react'
import s from '../sass/About.module.sass'

function About() {
	useEffect(() => {
		window.scrollTo(0,0)
	}, [])
	return(
		<section className={s.body}>
			<div>
				<div>
					<h2>Tentang Kami</h2>
					<p>
						Buat sendiri dan gak punya temen ngoding :)
					</p>
				</div>
			</div>
		</section>
	)
}

export default About