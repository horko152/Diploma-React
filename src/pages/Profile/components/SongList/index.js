import React, { useEffect, useState } from 'react';
import Song from '../Song';
import { getSongListRequest } from '../../../../services/Profile/api';

const SongList = () => {
	const [page, setPage] = useState(1);
	const [listOfPages, setListOfPages] = useState([]);
	useEffect(() => {
		// here get list with user songs
		getSongListRequest().then(res => {
			setListOfPages(res);
		});
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
					{listOfPages &&
						listOfPages.length > 0 &&
						listOfPages.map(song => {
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
