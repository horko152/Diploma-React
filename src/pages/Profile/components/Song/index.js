import React  from 'react';

const Song = ({song}) =>{
  return (
    <div className="divTableRow">
      <div className="divTableCell id-cell">{song.id}</div>
      <div className="divTableCell name-cell">{song.name}</div>
      <div className="divTableCell artist-cell">{song.artist}</div>
      <div className="divTableCell likes-cell">{song.likes}</div>
    </div>
  )
}

export default Song;
