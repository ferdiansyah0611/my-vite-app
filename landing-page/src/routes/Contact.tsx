import React from 'react'
import s from '../sass/Contact.module.sass'

import Gmail from '../svg/Gmail.svg'
import Whatsapp from '../svg/Whatsapp.svg'

function Contact() {
	return(
		<section className={s.body}>
			<div>
				<div>
					<h2>Kontak Kami</h2>
					<img className={s.profile} src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDh8fHBlb3BsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" alt="profile"/>
					<h3>Ferdiansyah</h3>
					<h4>Founder of Fairy Technology</h4>
					<img onClick={() => window.open('mailto:ferdif9996@gmail.com')} className={s.icon} src={Gmail} alt="gmail"/>
					<img onClick={() => window.open('https://wa.me/62895607486361')} className={s.icon} src={Whatsapp} alt="gmail"/>
				</div>
			</div>
		</section>
	)
}

export default Contact