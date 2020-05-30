import request from '../request';

export const getSongInfoRequest = async params => {
	return await {
		artist: 'The Weeknd',
		name: 'Blinding Lights',
		author: 'horko'
	};
	// return await request.get('', params);
};

export const addSongRequest = async params => {
	return await request.post('', params);
};

export const likeRequest = async params => {
	return await request.post('', params);
};
