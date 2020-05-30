import React, { useState } from 'react';
import { likeRequest } from '../../../../services/Songs/api';
import dislikeBlackImg from '../../../../assets/image/dislike-black.png';
import dislikeImg from '../../../../assets/image/dislike.png';
import likeRedImg from '../../../../assets/image/like-red.png';
import likeImg from '../../../../assets/image/like.png';

const Likes = () => {
	const [likeType, setLikeType] = useState('');

	const like = bool => {
		if (bool) {
			setLikeType('like');
		} else {
			setLikeType('dislike');
		}

		// TODO here need song id
		likeRequest({ like: bool, id: 1 }).then(() => {
			// maybe there need something
		});
	};

	return (
		<div className="like-container">
			<div className="dislike">
				{likeType === 'dislike' ? (
					<img className="dislike-img-active" src={dislikeBlackImg} alt="" />
				) : (
					<img
						className={`dislike-img ${likeType === 'like' ? 'hidden' : ''}`}
						src={dislikeImg}
						onClick={() => like(false)}
						alt=""
					/>
				)}
			</div>
			<div className="like">
				{likeType === 'like' ? (
					<img className="like-img-active" src={likeRedImg} alt="" />
				) : (
					<img
						className={`like-img ${likeType === 'dislike' ? 'hidden' : ''}`}
						src={likeImg}
						onClick={() => like(true)}
						alt=""
					/>
				)}
			</div>
		</div>
	);
};

export default Likes;
