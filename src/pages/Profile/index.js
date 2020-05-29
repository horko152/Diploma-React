import React from 'react';
import Header from './components/Header';
import SongList from './components/SongList';
import ProfileInfo from './components/ProfileInfo';

const Profile = () => {
	return (
		<div>
			<Header />
			<main className="main">
				<ProfileInfo />
				<SongList />
			</main>
		</div>
	);
};

export default Profile;
