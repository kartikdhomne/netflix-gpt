import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {

  if (!movies) return;

  return (
    <div className="pl-6">
      <h1 className="text-3xl py-6 text-white bg-opacity-90">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex">
          {movies.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
