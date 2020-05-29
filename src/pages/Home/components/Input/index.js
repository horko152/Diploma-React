import React from 'react';

function Input({ placeholder, error, value, onChange, type = 'text', className, refProp }) {
	return (
		<div className={`input-wrapper ${className}`}>
			<input
				ref={refProp}
				name="song-name-input"
				className="song-input"
				type={type}
				placeholder={placeholder}
				value={value}
				onChange={e => onChange(e.target.value)}
			/>
			{error && <div>{error}</div>}
		</div>
	);
}

export default Input;
