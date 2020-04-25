import React from "react";
import { Link } from 'react-router-dom'
import RadioButton from "../../components/RadioButton";

const Home = () => {
  return (
    <div>
      <header className="header home-header">
        <div className="header-user">
          <div className="viewers">120 viewers</div>
          <Link to={'/login'}>
            <img src={require('../../assets/image/login.png')} className="login-img" alt="Login"/>
          </Link>
          <Link to={'/profile'}>
            <img src={require('../../assets/image/user1.png')} className="user-img hidden" alt="Profile"/>
          </Link>
        </div>
      </header>
      <main className="main home-main">
        <RadioButton/>
        <div className="song-info">
          <div className="artist">
            <h2 className="artist-name">The Weeknd</h2>
          </div>
          <div className="song">
            <h3 className="song-name">Blinding Lights</h3>
          </div>
          <div className="user-name-uploaded">
            <a className="user-name-uploaded-link" href="">horko</a>
          </div>
        </div>
        <div className="volume">
          <img className="volume-img" src={require('../../assets/image/volume.png')} alt=""/>
          <img className="mute-img hidden" src={require('../../assets/image/mute.png')} alt=""/>
          <div className="volume-control">
            <input className="inp-range" id="rng" onInput="currentrange()"
                   type="range" min="0" max="100" value="1" step="1"/>
          </div>
        </div>
        <div className="song-options">
          <div className="add-song">
            <button className="add-btn">
              <span className="btn-content">Add Song</span>
            </button>
          </div>
          <div className="play pause">
            <img className="play-img" src={require('../../assets/image/play.png')} onClick="PlayPause(this)" alt=""/>
            <img className="pause-img hidden" src={require('../../assets/image/pause.png')} onClick="PlayPause(this)"
                 alt=""/>
          </div>
          <div className="like-container">
            <div className="dislike">
              <img className="dislike-img" src={require('../../assets/image/dislike.png')} alt=""/>
              <img className="dislike-img-active hidden" src={require('../../assets/image/dislike-black.png')} alt=""/>
            </div>
            <div className="like">
              <img className="like-img" src={require('../../assets/image/like.png')} alt=""/>
              <img className="like-img-active hidden" src={require('../../assets/image/like-red.png')} alt=""/>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
};

export default Home;