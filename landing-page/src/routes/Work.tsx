import React, {
	useState, useEffect
} from 'react'
import {
  useHistory
} from 'react-router-dom'
import s from '../sass/Work.module.sass'

export default function Work(){
	const history = useHistory()
	const [project, setproject] = useState([
		{
			name: 'Frontend S1',
			title: 'Make a blog',
			username: 'Ferdiansah'
		}
	])

	useEffect(() => {
    window.scrollTo(0,0)
  }, [])

	let toPricing = () => history.push('/pricing')
	return(
		<section className={s.body}>
			<div className={s.home_1}>
				<div className={s.nothing}>
					<p>Maaf saat ini kami sedang tidak mengerjakan project.</p>
					<button onClick={toPricing}>Lihat Harga Pengerjaan Project</button>
				</div>
			</div>
		</section>
	)
}