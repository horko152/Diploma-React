import React from 'react';
import { Link } from "react-router-dom";
import Song from "./components/Song";

const testSong = [
  {
    id: 1,
    name: '1',
    artist: '1',
    likes: '1',
  },
  {
    id: 2,
    name: '2',
    artist: '2',
    likes: '2',
  },
  {
    id: 3,
    name: 3,
    artist: 3,
    likes: 3,
  },
]

const Profile = () => {
  return (
    <div>
      <header className="header">
        <Link to={'/'}>
          <div className="home">
            <img src={require('../../assets/image/left-arrow.png')}/>
            <h3>HOME</h3>
          </div>
        </Link>

        <div className="header-user">
          <img src={require('../../assets/image/login.png')} className="login-img hidden" alt="Login"/>
          <img src={require('../../assets/image/user1.png')} className="user-img" alt="Profile"/>
        </div>
      </header>
      <main className="main">
        <div className="profile">
          <div className="profile-img">
            <img src={require('../../assets/image/profile-img.png')}/>
          </div>
          <div className="profile-column">
            <div className="profile-name">
              <h4>Name:</h4>
              <h3>Igor</h3>
            </div>
            <div className="profile-surname">
              <h4>Surname:</h4>
              <h3>Voloshenyuk</h3>
            </div>
            <div className="profile-date-of-bithday">
              <h4>Date of Birthday:</h4>
              <h3>12.08.1998</h3>
            </div>
            <div className="profile-email">
              <h4>Email:</h4>
              <h3>voloshenyuk98@gmail.com</h3>
            </div>
            <div className="profile-information">
              <div className="information-title">
                <h3>About me</h3>
              </div>
              <p>I am a developer of this project for my diploma work. If you found bugs send me description of them on
                my email.</p>
            </div>
            <div className="profile-edit">
              <button className="edit-btn">
                <span className="btn-content">Edit</span>
              </button>
            </div>
          </div>
        </div>
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
              {testSong && testSong.length > 0 &&
              testSong.map(song => {
                return (
                  <Song song={song}/>
                )
              })}
            </div>
          </div>
          <div className="user-songs outerTableFooter">
            <div className="tableFootStyle">
              <div className="links">
                <a href="#">&laquo;</a>
                <a className="active" href="#">1</a>
                <a href="#">2</a> <a href="#">3</a>
                <a href="#">4</a> <a href="#">&raquo;</a>
              </div>
            </div>
          </div>
        </div>
      </main>

    </div>
  )
};

export default Profile;