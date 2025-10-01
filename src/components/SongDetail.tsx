import React from 'react';
import { useParams } from 'react-router-dom';
import type { Song } from '../types';

interface SongDetailProps {
  songs: Song[];
}

const SongDetail: React.FC<SongDetailProps> = ({ songs }) => {
  const { id } = useParams<{ id: string }>();

  const song = songs.find(s => s.id === id);

  if (!song) {
    return (
      <div className="error">
        Песня не найдена
      </div>
    );
  }

  return (
    <div className="song-detail">
      <div className="detail-header">
        <h1 className="detail-title">{song.title}</h1>
      </div>

      <div className="lyrics">
        {song.lyrics}
      </div>
    </div>
  );
};

export default SongDetail;