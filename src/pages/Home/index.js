import React, { useState } from 'react';
import ReactHowler from 'react-howler';
import { Howl, Howler } from 'howler';
import RadioButton from '../../components/RadioButton';
import AddSong from './components/AddSong';
import Header from './components/Header';
import SongInfo from './components/SongInfo';

const Home = ({ isLogged }) => {
	const [volume, setVolume] = useState(1);
	const changeInput = event => {
		if (event.target.value == 0) {
			setMute(true);
		}
		if (event.target.value > 0) {
			setMute(false);
		}
		setVolume(event.target.value);
	};
	const [mute, setMute] = useState(false);
	const clickMute = () => {
		setMute(!mute);
	};

	const [play, setPlay] = useState(false);
	const [pause, setPause] = useState(false);
	const [likeType, setLikeType] = useState('');
	const [AddingSong, setAddingSong] = useState(false);

	return (
		<div>
			<Header isLogged={isLogged} />
			<main className="main home-main">
				<RadioButton />
				<SongInfo songInfo={{ name: 'here will be info' }} />

				<div className="volume">
					<img
						className={`volume-img ${mute ? 'hidden' : ''}`}
						onClick={clickMute}
						src={require('../../assets/image/volume.png')}
						alt=""
					/>
					<img
						className={`mute-img ${mute ? '' : 'hidden'}`}
						onClick={clickMute}
						src={require('../../assets/image/mute.png')}
						alt=""
					/>
					<div className="volume-control">
						<input
							className="inp-range"
							id="rng"
							onChange={changeInput}
							type="range"
							min="0"
							max="100"
							value={mute ? 0 : volume}
							step="1"
						/>
					</div>
				</div>

				<div className="song-options">
					<div className="add-song">
						<button
							className="add-btn"
							onClick={() => {
								setAddingSong(!AddingSong);
							}}
						>
							<span className="btn-content">Add Song</span>
						</button>
						{AddingSong && <AddSong />}
					</div>
					<div className="play pause">
						<ReactHowler
							src="https://file-examples.com/wp-content/uploads/2017/11/file_example_MP3_5MG.mp3"
							// https://file-examples.com/wp-content/uploads/2017/11/file_example_MP3_5MG.mp3
							// С:/Users/Horko/Desktop/The Weeknd - Virgin (from American Dad).mp3
							preload
							playing={play}
							volume={volume / 100}
						/>
						<img
							className="play-img"
							src={require(`../../assets/image/${pause ? 'pause.png' : 'play.png'}`)}
							onClick={() => {
								setPause(!pause);
								pause ? setPlay(false) : setPlay(true);
							}}
							alt=""
						/>
					</div>
					<div className="like-container">
						<div className="dislike">
							{likeType === 'dislike' ? (
								<img
									className="dislike-img-active"
									src={require('../../assets/image/dislike-black.png')}
									onClick={() => setLikeType('dislike')}
									alt=""
								/>
							) : (
								<img
									className={`dislike-img ${likeType === 'like' ? 'hidden' : ''}`}
									src={require('../../assets/image/dislike.png')}
									onClick={() => setLikeType('dislike')}
									alt=""
								/>
							)}
						</div>
						<div className="like">
							{likeType === 'like' ? (
								<img
									className="like-img-active"
									src={require('../../assets/image/like-red.png')}
									onClick={() => setLikeType('like')}
									alt=""
								/>
							) : (
								<img
									className={`like-img ${likeType === 'dislike' ? 'hidden' : ''}`}
									src={require('../../assets/image/like.png')}
									onClick={() => setLikeType('like')}
									alt=""
								/>
							)}
						</div>
					</div>
				</div>
			</main>
		</div>
	);
};

export default Home;
