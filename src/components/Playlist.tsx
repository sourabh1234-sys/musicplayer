import React from 'react';
import { Song } from '../App';

interface PlaylistProps {
  playlist: Song[];
  setCurrentSongIndex: (index: number) => void;
  setCurrentView: (view: string) => void;
}

function Playlist({ playlist, setCurrentSongIndex, setCurrentView }: PlaylistProps) {
  const playSong = (index: number) => {
    setCurrentSongIndex(index);
    setCurrentView('player');
  };

  return (
    <div className="playlist">
      <h2>Your Playlist</h2>
      <ul>
        {playlist.map((song, index) => (
          <li key={index} onClick={() => playSong(index)}>
            <img src={song.cover} alt={song.title} className="song-thumbnail" />
            <div className="song-details">
              <h3>{song.title}</h3>
              <p>{song.artist}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Playlist;