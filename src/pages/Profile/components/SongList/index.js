import React, { useEffect, useState } from 'react';
import Song from '../Song';

const testSong = [
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

const SongList = () => {
	const [page, setPage] = useState(1);
	useEffect(() => {
		// here get list with user songs
	}, []);

	return (
		<div className="profile-songs">
			<div className="songs-title">
				<h3>Songs</h3>
			</div>
			<div className="divTable user-songs">
				<div className="divTableHeading">
					<div className="divTableRow">
						<div className="divTableHead">ID</div>
						<div className="divTableHead">Name</div>
						<div className="divTableHead">Artist</div>
						<div className="divTableHead">Likes</div>
					</div>
				</div>
				<div className="divTableBody">
					{testSong &&
						testSong.length > 0 &&
						testSong.map(song => {
							return <Song key={`${song.name}`} song={song} />;
						})}
				</div>
			</div>

			<div className="user-songs outerTableFooter">
				<div className="tableFootStyle">
					<div className="links">
						{!(page === 1) && (
							<a href="#" onClick={() => setPage(page - 1)}>
								&laquo;
							</a>
						)}

						{Array.from(new Array(5), (el, index) => (
							<a
								key={`${index}`}
								className={`pointer ${page === index + 1 ? 'active' : ''}`}
								onClick={() => setPage(index + 1)}
							>
								{index + 1}
							</a>
						))}
						{!(page === 5) && (
							<a href="#" onClick={() => setPage(page + 1)}>
								&raquo;
							</a>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default SongList;
