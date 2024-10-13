import { useState } from 'react'
import './App.css'
import MusicPlayer from './components/MusicPlayer'
import Home from './components/Home'
import Playlist from './components/Playlist'
import More from './components/More'

export interface Song {
  title: string;
  artist: string;
  url: string;
  cover: string;
}

const playlist: Song[] = [
  {
    title: "Sunny Side Up",
    artist: "Roa",
    url: "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/no_curator/Roa/Chill_Beats/Roa_-_01_-_Sunny_Side_Up.mp3",
    cover: "https://images.unsplash.com/photo-1530968033775-2c92736b131e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
  },
  {
    title: "Memories",
    artist: "Olexy",
    url: "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/ccCommunity/Olexy/Visions/Olexy_-_03_-_Memories.mp3",
    cover: "https://images.unsplash.com/photo-1571330735066-03aaa9429d89?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
  },
  {
    title: "Acoustic Breeze",
    artist: "Benjamin Tissot",
    url: "https://www.bensound.com/bensound-music/bensound-acousticbreeze.mp3",
    cover: "https://images.unsplash.com/photo-1485579149621-3123dd979885?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
  },
  {
    title: "Slow Motion",
    artist: "Benjamin Tissot",
    url: "https://www.bensound.com/bensound-music/bensound-slowmotion.mp3",
    cover: "https://images.unsplash.com/photo-1528715471579-d1bcf0ba5e83?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
  }
];

function App() {
  const [currentView, setCurrentView] = useState('home');
  const [currentSongIndex, setCurrentSongIndex] = useState(0);

  const renderView = () => {
    switch (currentView) {
      case 'home':
        return <Home />;
      case 'player':
        return <MusicPlayer playlist={playlist} currentSongIndex={currentSongIndex} setCurrentSongIndex={setCurrentSongIndex} />;
      case 'playlist':
        return <Playlist playlist={playlist} setCurrentSongIndex={setCurrentSongIndex} setCurrentView={setCurrentView} />;
      case 'more':
        return <More />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="app-container">
      {renderView()}
      <nav className="bottom-nav">
        <button onClick={() => setCurrentView('home')}>Home</button>
        <button onClick={() => setCurrentView('player')}>Player</button>
        <button onClick={() => setCurrentView('playlist')}>Playlist</button>
        <button onClick={() => setCurrentView('more')}>More</button>
      </nav>
    </div>
  )
}

export default App