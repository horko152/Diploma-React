import React, { useRef, useState } from 'react';
import { addSongRequest } from '../../../../services/Songs/api';
import Input from '../Input';

const AddSong = () => {
	const fileRef = useRef();
	const [addingSong, setAddingSong] = useState(false);
	const [values, setValues] = useState({
		name: '',
		artist: '',
		album: '',
		files: null
	});

	console.log('values', values);

	const changeFile = () => {
		console.log(fileRef);
		setValues({ ...values, files: fileRef.current.files[0] });
	};

	const submit = () => {
		console.log('values', values);
		addSongRequest().then(() => {
			if ('OK') {
				// todo redirect
			}
		});
	};

	return [
		<div className="add-song">
			<button
				className="add-btn"
				onClick={() => {
					setAddingSong(!addingSong);
				}}
			>
				<span className="btn-content">Add Song</span>
			</button>
		</div>,
		addingSong && (
			<form className="add-song-form">
				<div className="add-song-content">
					<h3>Add Song</h3>
					<Input
						placeholder="Name of song..."
						value={values.name}
						onChange={value => setValues({ ...values, name: value })}
					/>
					<Input
						placeholder="Name of the artist..."
						value={values.artist}
						onChange={value => setValues({ ...values, artist: value })}
					/>
					<Input
						placeholder="Name of Album(not requirment)..."
						value={values.album}
						onChange={value => setValues({ ...values, album: value })}
					/>
					<Input refProp={fileRef} onChange={changeFile} type="file" />

					<button name="song-submit" className="song-submit" type="submit" onClick={submit}>
						Submit
					</button>
				</div>
			</form>
		)
	];
};
export default AddSong;
