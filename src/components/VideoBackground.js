import React from "react";
import { useSelector } from "react-redux";
import { useMovieTrailer } from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideos);
  useMovieTrailer(movieId);

  return (
    <div className="relative w-screen">
      <iframe
      className="w-screen aspect-video"

        src={"https://www.youtube.com/embed/" + trailerVideo?.key + "?&autoplay=1&mute=1&autohide=1&showinfo=0&controls=0&frameborder=0&allowfullscreen"}
        title="YouTube video player"
        allow="fullscreen; accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
