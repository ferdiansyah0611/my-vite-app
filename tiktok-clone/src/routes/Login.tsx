import React, { useState } from 'react'
import Navbar from '../component/Navbar'
import r from '../style/Register.module.sass'

interface inputSubmit{
	preventDefault: any
}

const Login = () => {
	const [state, setstate] = useState({
		email: '',
		password: '',
	})
	const onsubmit = async (e: inputSubmit) => {
		e.preventDefault()
	}
	const changeInput = (e: object) => {
		setstate({...state, [e.target.name]: e.target.value})
	}
	return(
		<>
			<Navbar/>
			<div>
				<div className={r.register}>
					<div>
						<h2 align="center">Login</h2>
						<form onSubmit={onsubmit}>
							<div className={r.groupform}>
								<label htmlFor="email">Email</label>
								<input onKeyUp={changeInput} autoComplete="off" required={true} id="email" name="email" type="text" placeholder="Input your email"/>
							</div>
							<div className={r.groupform}>
								<label htmlFor="password">Password</label>
								<input onKeyUp={changeInput} autoComplete="off" required={true} id="password" name="password" type="password" placeholder="Input your password"/>
							</div>
							<button type="submit">Submit</button>
						</form>
					</div>
				</div>
			</div>
		</>
	)
}

export default Login