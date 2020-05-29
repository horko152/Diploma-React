import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './pages/App';

import './assets/css/reset.css';
import './assets/css/main.css';
import './assets/css/profile.css';
import './assets/css/login.css';
import './assets/css/common.css';

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root')
);
