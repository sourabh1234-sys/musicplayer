import { useState, useRef, useEffect } from 'react'
import { Song } from '../App'

interface MusicPlayerProps {
  playlist: Song[];
  currentSongIndex: number;
  setCurrentSongIndex: (index: number) => void;
}

function MusicPlayer({ playlist, currentSongIndex, setCurrentSongIndex }: MusicPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  const currentSong = playlist[currentSongIndex];

  useEffect(() => {
    if (isPlaying) {
      audioRef.current?.play();
    } else {
      audioRef.current?.pause();
    }
  }, [isPlaying, currentSongIndex]);

  useEffect(() => {
    const audio = audioRef.current;
    const updateProgress = () => {
      if (audio) {
        setProgress((audio.currentTime / audio.duration) * 100);
      }
    };

    audio?.addEventListener('timeupdate', updateProgress);
    return () => audio?.removeEventListener('timeupdate', updateProgress);
  }, []);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const playNextSong = () => {
    setCurrentSongIndex((prevIndex) => (prevIndex + 1) % playlist.length);
  };

  const playPreviousSong = () => {
    setCurrentSongIndex((prevIndex) => (prevIndex - 1 + playlist.length) % playlist.length);
  };

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    if (audio) {
      const newTime = (parseFloat(e.target.value) / 100) * audio.duration;
      audio.currentTime = newTime;
      setProgress(parseFloat(e.target.value));
    }
  };

  return (
    <div className="music-player">
      <h2>Playing Now</h2>
      <div className={`album-cover ${isPlaying ? 'rotating' : ''}`} style={{ backgroundImage: `url(${currentSong.cover})` }}></div>
      <div className="song-info">
        <h3>{currentSong.title}</h3>
        <p>{currentSong.artist}</p>
      </div>
      <audio ref={audioRef} src={currentSong.url} onEnded={playNextSong} />
      <input
        type="range"
        value={progress}
        onChange={handleProgressChange}
        className="progress-bar"
      />
      <div className="controls">
        <button onClick={playPreviousSong} className="control-btn previous">&#9664;</button>
        <button onClick={togglePlayPause} className="control-btn play-pause">
          {isPlaying ? '❚❚' : '▶'}
        </button>
        <button onClick={playNextSong} className="control-btn next">&#9654;</button>
      </div>
    </div>
  )
}

export default MusicPlayer