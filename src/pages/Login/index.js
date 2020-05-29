import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link, useHistory } from 'react-router-dom';
import RadioButton from '../../components/RadioButton';
import { signInRequest, signUpRequest } from '../../services/Login/api';
import Input from '../../components/Input';

const Login = ({ isLogged, setLogged }) => {
	const [values, setValues] = useState({
		username: '',
		email: '',
		password: ''
	});

	const [signIn, setSignIn] = useState(true);
	const history = useHistory();

	useEffect(() => {
		if (isLogged) {
			history.push('');
		}
	}, []);

	const submit = e => {
		e.preventDefault();
		if (signIn) {
			login();
		} else {
			register();
		}
	};

	const login = () => {
		signInRequest({
			username: values.username,
			password: values.password
		})
			.then(res => {
				localStorage.setItem('token', `Bearer ${res}`);
				history.push('/profile');
				setLogged(true);
			})
			.catch(res => console.log(res));
	};

	const register = () => {
		signUpRequest({
			username: values.username,
			email: values.email,
			password: values.password
		})
			.then(res => {
				localStorage.setItem('token', `Bearer ${res}`);
				history.push('/profile');
				setLogged(true);
			})
			.catch(res => console.log(res));
	};

	const changeValue = value => {
		setValues({ ...values, ...value });
	};

	return (
		<main className="main-login">
			<Link to="/">
				<RadioButton />
			</Link>
			<div className="sign-form">
				<div className="sign">
					<div
						className={`sign-in ${signIn ? 'active' : ''}`}
						onClick={() => {
							setSignIn(true);
						}}
					>
						Sign In
					</div>
					<div
						className={`sign-up  ${signIn ? '' : 'active'}`}
						onClick={() => {
							setSignIn(false);
						}}
					>
						Sign Up
					</div>
				</div>
				<form className="signUp-form sign-show">
					{!signIn && (
						<Input
							inputClassName="signUp-input"
							placeholder="Your email..."
							value={values.email}
							onChange={value => changeValue({ email: value })}
						/>
					)}
					<Input
						inputClassName="signUp-input"
						placeholder="Your username..."
						value={values.username}
						onChange={value => changeValue({ username: value })}
					/>
					<Input
						inputClassName="signUp-input"
						placeholder="Your password..."
						value={values.password}
						onChange={value => changeValue({ password: value })}
					/>
					<div className="center pdtop-20">
						<button
							name="signUp-button"
							type="submit"
							className="sign-button"
							onClick={e => {
								submit(e);
							}}
						>
							<span className="sign-button-content">{signIn ? 'Sign in' : 'Sign up'}</span>
						</button>
					</div>
				</form>
			</div>
		</main>
	);
};

Login.defaultProps = {
	isLogged: false,
	setLogged: null
};

Login.propTypes = {
	isLogged: PropTypes.bool,
	setLogged: PropTypes.func
};

export default Login;
