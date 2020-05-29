import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ReactHowler from 'react-howler';
import { Howl, Howler } from 'howler';
import RadioButton from '../../components/RadioButton';
import AddSong from './components/AddSong';

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
	const [likeType, setLikeType] = useState(false);
	const [AddingSong, setAddingSong] = useState(false);
	return (
		<div>
			<header className="header home-header">
				<div className="header-user">
					<div className="viewers">120 viewers</div>
					<Link to="/login">
						<img
							src={require('../../assets/image/login.png')}
							className={`login-img ${isLogged ? 'hidden' : ''}`}
							alt="Login"
						/>
					</Link>
					<Link to="/profile">
						<img
							src={require('../../assets/image/user1.png')}
							className={`user-img ${isLogged ? '' : 'hidden'}`}
							alt="Profile"
						/>
					</Link>
				</div>
			</header>
			<main className="main home-main">
				<RadioButton />
				<div className="song-info">
					<div className="artist">
						<h2 className="artist-name">The Weeknd</h2>
					</div>
					<div className="song">
						<h3 className="song-name">Blinding Lights</h3>
					</div>
					<div className="user-name-uploaded">
						<a className="user-name-uploaded-link" href="">
							horko
						</a>
					</div>
				</div>
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
						{AddingSong ? <AddSong /> : null}
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
