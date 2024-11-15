import { useState, useRef } from 'react';
import VideoPlayer from './VideoPlayer';

function App() {
  const playerRef = useRef(null);
  const [videoLink, setVideoLink] = useState("http://localhost:5000/video/The-Dark-Knight_multi_res/master.m3u8");

  const videoPlayerOptions = {
    controls: true,
    responsive: true,
    fluid: true,
    autoplay: false,
    sources: [
      {
        src: videoLink,
        type: "application/x-mpegURL"
      }
    ]
  };

  const handlePlayerReady = (player) => {
    playerRef.current = player;

    player.on("waiting", () => {
      console.log("Player is buffering");
    });

    player.on("dispose", () => {
      console.log("Player is disposed");
    });
  };

  const handleSeekBack = () => {
    if (playerRef.current) {
      const currentTime = playerRef.current.currentTime();
      playerRef.current.currentTime(Math.max(currentTime - 10, 0));
    }
  };

  const handleSeekForward = () => {
    if (playerRef.current) {
      const currentTime = playerRef.current.currentTime();
      playerRef.current.currentTime(currentTime + 10);
    }
  };

  return (
    <div className="container-xl flex items-center justify-center h-screen w-full bg-black">
      <div className="flex flex-col items-center justify-center">
        <div className="mb-4 flex">
          <button onClick={handleSeekBack} className="mr-4 px-4 py-2 bg-blue-500 text-white rounded">
            Seek Back 10s
          </button>
          <button onClick={handleSeekForward} className="px-4 py-2 bg-blue-500 text-white rounded">
            Seek Forward 10s
          </button>
        </div>
        <VideoPlayer options={videoPlayerOptions} onReady={handlePlayerReady} />
      </div>
    </div>
  );
}

export default App;
