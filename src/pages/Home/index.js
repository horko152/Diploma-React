import React, { useEffect, useRef, useState } from 'react';
import ReactHowler from 'react-howler';
import RadioButton from '../../components/RadioButton';
import AddSong from './components/AddSong';
import Header from './components/Header';
import SongInfo from './components/SongInfo';
import Likes from './components/Likes';

import playImg from '../../assets/image/play.png';
import pauseImg from '../../assets/image/pause.png';
import volumeImg from '../../assets/image/volume.png';
import muteImg from '../../assets/image/mute.png';

const Home = ({ isLogged }) => {
	const howlerRef = useRef();
	const [volume, setVolume] = useState(1);
	const [mute, setMute] = useState(false);
	const [pause, setPause] = useState(false);

	useEffect(() => {
		// here will be loading sond
	});

	const changeInput = event => {
		const { value } = event.target;
		if (value == 0) {
			setMute(true);
		} else if (mute && value > 0) {
			setMute(false);
		}
		setVolume(value);
	};

	const clickMute = () => {
		setMute(!mute);
	};

	return (
		<div>
			<Header isLogged={isLogged} />
			<main className="main home-main">
				<RadioButton />
				<SongInfo songInfo={{ name: 'here will be info' }} />
				<div className="volume">
					<img className="volume-img" onClick={clickMute} src={mute ? muteImg : volumeImg} alt="" />
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
					<AddSong />
					<div className="play pause">
						<ReactHowler
							ref={howlerRef}
							src="https://file-examples.com/wp-content/uploads/2017/11/file_example_MP3_5MG.mp3"
							// https://file-examples.com/wp-content/uploads/2017/11/file_example_MP3_5MG.mp3
							// С:/Users/Horko/Desktop/The Weeknd - Virgin (from American Dad).mp3
							preload
							playing={!pause}
							volume={mute ? 0 : volume / 100}
							onEnd={() => {
								// here will be loading next song
								console.log('end');
							}}
						/>
						<img
							className="play-img"
							src={pause ? playImg : pauseImg}
							onClick={() => {
								setPause(!pause);
							}}
							alt=""
						/>
					</div>
					<Likes />
				</div>
			</main>
		</div>
	);
};

export default Home;
