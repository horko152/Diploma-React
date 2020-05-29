import React, { useState } from 'react';
import { unLikeRequest } from '../../../../services/Songs/api';

const Likes = () => {
	const [likeType, setLikeType] = useState('');

	const unlike = () => {
		setLikeType('dislike');
		// TODO here need song id
		unLikeRequest({}).then(() => {
			// maybe there need something
		});
	};

	return (
		<div className="like-container">
			<div className="dislike">
				{likeType === 'dislike' ? (
					<img
						className="dislike-img-active"
						src={require('../../../../assets/image/dislike-black.png')}
						alt=""
					/>
				) : (
					<img
						className={`dislike-img ${likeType === 'like' ? 'hidden' : ''}`}
						src={require('../../../../assets/image/dislike.png')}
						onClick={unlike}
						alt=""
					/>
				)}
			</div>
			<div className="like">
				{likeType === 'like' ? (
					<img
						className="like-img-active"
						src={require('../../../../assets/image/like-red.png')}
						alt=""
					/>
				) : (
					<img
						className={`like-img ${likeType === 'dislike' ? 'hidden' : ''}`}
						src={require('../../../../assets/image/like.png')}
						onClick={() => setLikeType('like')}
						alt=""
					/>
				)}
			</div>
		</div>
	);
};

export default Likes;
