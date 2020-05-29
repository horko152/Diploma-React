import React from 'react';

const SongInfo = ({ songInfo }) => {
	return (
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
	);
};

export default SongInfo;
