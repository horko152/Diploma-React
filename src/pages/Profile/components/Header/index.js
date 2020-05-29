import React from 'react';
import { Link } from 'react-router-dom';
import login from '../../../../assets/image/login.png';
import leftArrow from '../../../../assets/image/left-arrow.png';
import userImg from '../../../../assets/image/user1.png';

const Header = () => {
	return (
		<header className="header">
			<Link to="/">
				<div className="home">
					<img src={leftArrow} alt="l-a" />
					<h3>HOME</h3>
				</div>
			</Link>

			<div className="header-user">
				<img src={login} className="login-img hidden" alt="Login" />
				<img src={userImg} className="user-img" alt="Profile" />
			</div>
		</header>
	);
};

export default Header;
