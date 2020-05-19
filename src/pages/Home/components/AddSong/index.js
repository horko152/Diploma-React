import React  from 'react';

const AddSong = () =>{
  return (
      <form className="add-song-form">
            <div className="add-song-content">
                <h3>Add Song</h3>
                <input name="song-name-input" className="song-input" type="text" placeholder="Name of song..."/>
                <input name="song-artist-input" className="song-input" type="text" placeholder="Name of the artist..."/>
                <input name="song-album-input" className="song-input" type="text" placeholder="Name of Album(not requirment)..."/>
                <input name="song-file-input" className="song-file-input" type="file"/>
                <button name="song-submit" className="song-submit" type="submit">Submit</button>
            </div>
        </form>
  )
}
export default AddSong;


