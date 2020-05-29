import React, { useRef, useState } from 'react';
import { addSongRequest } from '../../../../services/Songs/api';

const AddSong = () => {
	const fileRef = useRef();
	const [values, setValues] = useState({
		name: '',
		artist: '',
		album: '',
		files: null
	});

	console.log('values', values);

	const changeFile = () => {
		setValues({ files: fileRef.current.files[0] });
	};

	const submit = () => {
		console.log('values', values);
		addSongRequest().then(() => {
			if ('OK') {
				// todo redirect
			}
		});
	};
	return (
		<form className="add-song-form">
			<div className="add-song-content">
				<h3>Add Song</h3>
				<input
					name="song-name-input"
					className="song-input"
					type="text"
					placeholder="Name of song..."
					value={values.name}
					onChange={e => setValues({ ...values, name: e.target.value })}
				/>
				<input
					name="song-artist-input"
					className="song-input"
					type="text"
					placeholder="Name of the artist..."
					value={values.artist}
					onChange={e => setValues({ ...values, artist: e.target.value })}
				/>
				<input
					name="song-album-input"
					className="song-input"
					type="text"
					placeholder="Name of Album(not requirment)..."
					value={values.album}
					onChange={e => setValues({ ...values, album: e.target.value })}
				/>
				<input
					ref={fileRef}
					name="song-file-input"
					className="song-file-input"
					type="file"
					onChange={changeFile}
				/>
				<button name="song-submit" className="song-submit" type="submit" onClick={submit}>
					Submit
				</button>
			</div>
		</form>
	);
};
export default AddSong;
