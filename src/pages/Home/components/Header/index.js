import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ isLogged }) => {
	return (
		<header className="header home-header">
			<div className="header-user">
				<div className="viewers">120 viewers</div>
				<Link to="/login">
					<img
						src={require('../../../../assets/image/login.png')}
						className={`login-img ${isLogged ? 'hidden' : ''}`}
						alt="Login"
					/>
				</Link>
				<Link to="/profile">
					<img
						src={require('../../../../assets/image/user1.png')}
						className={`user-img ${isLogged ? '' : 'hidden'}`}
						alt="Profile"
					/>
				</Link>
			</div>
		</header>
	);
};

export default Header;
