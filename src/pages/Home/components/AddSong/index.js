import React  from 'react';

const AddSong = () =>{
  return (
      <form className="add-song-form">
            <div className="add-song-content">
                <input name="song-name-input" className="songname-input" type="text" placeholder="Name of song..."/>
                <input name="song-artist-input" className="song-artist-input" type="text" placeholder="Name of the artist..."/>
                <input name="song-album-input" className="song-album-input" type="text" placeholder="Name of Album(not requirment)..."/>
                <input name="song-file-input" className="song-file-input" type="file"/>
                <input name="song-submit" type="submit"/>
            </div>
        </form>
  )
}
export default AddSong;


