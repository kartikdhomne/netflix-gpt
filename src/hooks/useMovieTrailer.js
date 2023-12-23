import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTrailerVideos } from "../utils/moviesSlice";

export const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  // fetch trailer video and updating the store with trailer video data
  const getMovieVideos = async () => {
    try {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
        API_OPTIONS
      );

      const json = await data.json();

      if (json.results && json.results.length > 0) {
        const filterData = json.results.filter((video) => video.type === "Trailer");
        const trailer = filterData.length ? filterData[0] : json.results[0];
        dispatch(addTrailerVideos(trailer));
      }
    } catch (error) {
      console.error("Error fetching movie videos:", error);
    }
  };

  useEffect(() => {
    getMovieVideos();
  }, []);
};

