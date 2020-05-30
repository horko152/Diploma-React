import request from '../request';

export const getSongListRequest = async params => {
	return await [
		{
			id: 1,
			name: 'Blinding Lights',
			artist: 'The Weeknd',
			likes: '100%'
		},
		{
			id: 2,
			name: 'Heartless',
			artist: 'The Weeknd',
			likes: '50%'
		},
		{
			id: 3,
			name: 'In Your Eyes',
			artist: 'The Weeknd',
			likes: '50%'
		},
		{
			id: 4,
			name: 'Save Your Tears',
			artist: 'The Weeknd',
			likes: '50%'
		},
		{
			id: 5,
			name: 'After Hours',
			artist: 'The Weeknd',
			likes: '50%'
		}
	];
	// return request.get('', params);
};

export const getProfileRequest = async params => {
	return await {
		userName: 'horko',
		email: 'voloshenyuk98@gmail.com',
		about:
			'I am a developer of this project for my graduate work. If you found bugs send me description of them on my email.'
	};
	// return request.get('', params);
};
