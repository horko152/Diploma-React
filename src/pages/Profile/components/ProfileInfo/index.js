import React, { useEffect } from 'react';
import profileImg from '../../../../assets/image/profile-img.png';

const ProfileInfo = () => {
	useEffect(() => {
		// here get user info
	}, []);

	return (
		<div className="profile">
			<div className="profile-img">
				<img src={profileImg} alt="profile" />
			</div>
			<div className="profile-column">
				<div className="profile-username">
					<h4>Username:</h4>
					<h3>horko</h3>
				</div>
				{/* <div className="profile-surname">
              <h4>Surname:</h4>
              <h3>Voloshenyuk</h3>
            </div>
             <div className="profile-date-of-bithday">
              <h4>Date of Birthday:</h4>
              <h3>12.08.1998</h3>
            </div>  */}
				<div className="profile-email">
					<h4>Email:</h4>
					<h3>voloshenyuk98@gmail.com</h3>
				</div>
				<div className="profile-information">
					<div className="information-title">
						<h3>About me</h3>
					</div>
					<p>
						I am a developer of this project for my graduate work. If you found bugs send me
						description of them on my email.
					</p>
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
