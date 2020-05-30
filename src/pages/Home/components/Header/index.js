import React from 'react';
import { Link } from 'react-router-dom';
import loginImg from '../../../../assets/image/login.png';
import userImg from '../../../../assets/image/user1.png';

const Header = ({ isLogged }) => (
	<header className="header home-header">
		<div className="header-user">
			<div className="viewers">120 viewers</div>
			<Link to={isLogged ? '/profile' : '/login'}>
				<img src={isLogged ? userImg : loginImg} className="login-img" alt="Login" />
			</Link>
		</div>
	</header>
);

export default Header;
