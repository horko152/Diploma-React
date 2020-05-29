import request from '../request';

export const addSongRequest = async params => {
	return await request.post('', params);
};

export const unLikeRequest = async params => {
	return await request.post('', params);
};
