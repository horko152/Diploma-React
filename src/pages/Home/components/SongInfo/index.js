import React from 'react';

const SongInfo = ({ songInfo }) => (
	<div className="song-info">
		<div className="artist">
			<h2 className="artist-name">{songInfo.artist}</h2>
		</div>
		<div className="song">
			<h3 className="song-name">{songInfo.name}</h3>
		</div>
		<div className="user-name-uploaded">
			<a className="user-name-uploaded-link" href="">
				{songInfo.author}
			</a>
		</div>
	</div>
);

export default SongInfo;
