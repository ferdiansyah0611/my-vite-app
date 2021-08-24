import React,{
	useState
} from 'react'
import s from "../style/DialogLogin.module.scss"

interface prop{
	open: boolean,
	onClose: any
}

export default function DialogLogin(props: prop) {
	const { open, onClose } = props
	const [provider, setprovider] = useState([
		'Email', 'QR Code', 'Google', 'Facebook', 'Twitter', 'Github', 'Instagram'
	])
	return(
		<div className={open ? s.dialog: s.hidden}>
			<div className={s.content}>
				<div className={s.listProvider}>
					{provider.map((d,i) => {
						return(
							<button className={s.btnProvider} key={i}>
								Login With {d}
							</button>
						)
					})}
				</div>
			</div>
			<div onClick={onClose} className={s['icon-close']}>
				<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
				</svg>
			</div>
		</div>
	)
}