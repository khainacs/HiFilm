import { useRef, useEffect } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";

const VideoPlayer = ({ options, onReady }) => {
  const videoRef = useRef(null);
  const playerRef = useRef(null);

  useEffect(() => {
    if (!playerRef.current) {
      const videoElement = document.createElement("video-js");
      videoElement.classList.add("vjs-big-play-centered");
      videoRef.current.appendChild(videoElement);

      const player = (playerRef.current = videojs(videoElement, options, () => {
        videojs.log("Player is ready");
        if (onReady) onReady(player);
      }));

      // Xử lý sự kiện
      player.on("waiting", () => videojs.log("Player is buffering"));
      player.on("seeked", () => videojs.log(`Seeked to: ${player.currentTime()}`));
      player.on("seeking", () => videojs.log("Player is seeking"));
    } else {
      const player = playerRef.current;
      player.src(options.sources);
      player.autoplay(options.autoplay);
    }
  }, [options]);

  useEffect(() => {
    return () => {
      if (playerRef.current) {
        playerRef.current.dispose();
        playerRef.current = null;
      }
    };
  }, []);

  return (
    <div data-vjs-player className="w-[200px]  h-[250px] ">
    <div ref={videoRef} className="" />
  </div>
  );
};

export default VideoPlayer;
