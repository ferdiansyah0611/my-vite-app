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
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Modi exercitationem cupiditate unde quo quis illum inventore,
						illo ullam, aut. Cumque quaerat dolorum commodi alias deserunt 
						consequatur repellat error ut adipisci!<br/>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Modi exercitationem cupiditate unde quo quis illum inventore,
						illo ullam, aut. Cumque quaerat dolorum commodi alias deserunt
						consequatur repellat error ut adipisci!
					</p>
				</div>
			</div>
		</section>
	)
}

export default About