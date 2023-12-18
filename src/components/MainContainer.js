import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies) return; //early return (movies == null)

  const mainMovie = movies[0];
  console.log(mainMovie);

  const { original_title, overview } = mainMovie;

  return (
    <div className="relative h-screen">
  <VideoBackground />
  <div className="absolute inset-0 flex items-center justify-center">
    <VideoTitle className="relative" title={original_title} overview={overview} />
  </div>
</div>

  );
};

export default MainContainer;
