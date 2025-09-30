import React from 'react';
import { useNavigate } from 'react-router-dom';
import type { Song } from '../types';

interface SongListProps {
  songs: Song[];
}

const SongList: React.FC<SongListProps> = ({ songs }) => {
  const navigate = useNavigate();

  const handleSongClick = (songId: string) => {
    navigate(`/song/${songId}`);
  };

  return (
    <div className="song-list">
      {songs.map((song) => (
        <div
          key={song.id}
          className="song-item"
          onClick={() => handleSongClick(song.id)}
        >
          <h2 className="song-title">{song.title}</h2>
        </div>
      ))}
    </div>
  );
};

export default SongList;