import request from '../request';

export const signInRequest = async object => {
	return await request.post('api/login', { ...object });
};

export const signUpRequest = async params => {
	return await request.post('', { ...params });
};
