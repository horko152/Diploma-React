import React, { useEffect, useState } from 'react';
import profileImg from '../../../../assets/image/profile-img.png';
import { getProfileRequest } from '../../../../services/Profile/api';

const ProfileInfo = () => {
	const [profile, setProfile] = useState({
		userName: '',
		email: '',
		about: ''
	});

	useEffect(() => {
		// maybe need user id or not )
		getProfileRequest().then(res => {
			setProfile(res);
		});
	}, []);

	return (
		<div className="profile">
			<div className="profile-img">
				<img src={profileImg} alt="profile" />
			</div>
			<div className="profile-column">
				<div className="profile-field font profile-username">
					<h4>Username:</h4>
					<h3>{profile.userName}</h3>
				</div>
				<div className="profile-field font">
					<h4>Email:</h4>
					<h3>{profile.email}</h3>
				</div>
				<div className="profile-information font">
					<div className="information-title">
						<h3>About me</h3>
					</div>
					<p>{profile.about}</p>
				</div>
				<div className="profile-edit">
					<button type="button" className="edit-btn">
						<span className="btn-content">Edit</span>
					</button>
				</div>
			</div>
		</div>
	);
};

export default ProfileInfo;
