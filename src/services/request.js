const API = 'https://localhost:44360';

const getUserToken = async () => {
	let token = (await localStorage.getItem('token')) || null;
	if (token === 'null') token = null;

	return token;
};

function getBaseOptions(method) {
	const options = {};
	options.method = method;
	options.headers = {};
	options.headers.accept = 'application/json';
	options.headers['content-Type'] = 'application/json';

	return options;
}

const authorizeRequest = async options => {
	const token = await getUserToken();

	if (token) options.headers.Authorization = token;
	return options;
};

function getPathWithQueryString(path, params = {}) {
	const esc = encodeURIComponent;
	const query = Object.keys(params)
		.filter(k => params[k])
		.map(k => `${esc(k)}=${esc(params[k])}`)
		.join('&');
	return query ? `${path}?${query}` : path;
}

function getRequestUrl(path) {
	return `${API}/${path}`;
}

const base = async (path, method, customOptions) => {
	let options = getBaseOptions(method);
	const auth = await authorizeRequest(options);
	options = Object.assign(options, auth, customOptions);

	console.log(path);

	return fetch(getRequestUrl(path), options)
		.then(async response => {
			if (response.ok) {
				return await response.json();
			}
			throw response;
		})
		.catch(async err => {
			console.log(err);

			throw err;
		});
};

const request = {
	// example { id: 1 }
	get: (path, params) => {
		const pathWithParams = getPathWithQueryString(path, params);
		return base(pathWithParams, 'GET', {});
	},
	delete: (path, params) => {
		const pathWithParams = getPathWithQueryString(path, params);
		return base(pathWithParams, 'DELETE', {});
	},
	post: (path, params) => {
		const options = { body: JSON.stringify(params) };
		return base(path, 'POST', options);
	},
	put: (path, params) => {
		const options = { body: JSON.stringify(params) };
		return base(path, 'PUT', options);
	},
	patch: (path, params) => {
		const options = { body: JSON.stringify(params) };
		return base(path, 'PATCH', options);
	}
};

export default request;
