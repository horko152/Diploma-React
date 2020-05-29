import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router';
import Home from './Home';
import Profile from './Profile';
import Login from './Login';

const App = () => {
	const [isLogged, setIsLogged] = useState(false);
	useEffect(() => {
		const initialize = async () => {
			try {
				const token = localStorage.getItem('token');
				if (token) {
					console.log('logged');
					setIsLogged(true);
				}
			} catch (e) {
				console.log(e);
			}
		};
		initialize();
	}, []);

	return (
		<Switch>
			<Route exact path="/" component={() => <Home isLogged={isLogged} />} />
			<Route path="/profile" component={() => <Profile isLogged={isLogged} />} />
			<Route
				path="/login"
				component={() => <Login isLogged={isLogged} setIsLogged={setIsLogged} />}
			/>
		</Switch>
	);
};

export default App;
