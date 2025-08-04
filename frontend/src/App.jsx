import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import VideoPlayer from './video.jsx'

function App() {
  const playerRef = useRef(null)
  const videoLink ="http://localhost:8000/uploads/courses/b6b61a70-780b-4a53-8e57-68ad6376cf87/index.m3u8"
  const videoPlayerOptions = {
    controls : true ,
    responsive : true ,
    fluid : true ,
    sources : [
     { src: videoLink,
      type: "application/x-mpegURL"}
    ],
      
  }
  const handlePlayerReady = (player) => {
    playerRef.current = player;

    // You can handle player events here, for example:
    player.on("waiting", () => {
      videojs.log("player is waiting");
    });

    player.on("dispose", () => {
      videojs.log("player will dispose");
    });
  };

  return (
   <>
      <div>
        <h1>Video Player </h1>
      </div>
      <VideoPlayer options={videoPlayerOptions} onReady={handlePlayerReady} />
   </>
  )
}

export default App
