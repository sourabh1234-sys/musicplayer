import React from 'react';

function Home() {
  return (
    <div className="home">
      <h1>Welcome to Your Music App</h1>
      <p>Enjoy your favorite tunes and discover new music!</p>
      <div className="featured-section">
        <h2>Featured Playlists</h2>
        <ul>
          <li>Summer Hits</li>
          <li>Workout Mix</li>
          <li>Relaxing Jazz</li>
        </ul>
      </div>
    </div>
  );
}

export default Home;