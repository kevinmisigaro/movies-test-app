import { useCallback, useEffect, useState } from "react";
import MovieCard from "./components/card";
import Layout from "./components/layout";
import axios from "axios";
import { Movie } from "./utils/interfaces";

const App = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  const fetchMovies = useCallback(async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}=Niram`
      );

      console.log(response);
      setMovies(response.data.description)
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <Layout>
      <div className="flex flex-row justify-center w-full">
        <input
          type="text"
          placeholder="Search"
          className="input input-bordered w-24 md:w-[30vw]"
        />
      </div>
      <div
        className={`my-10  grid grid-cols-1 md:grid-cols-3 items-center gap-x-12 gap-y-10`}
      >
        {movies.length > 0 ? (
          movies.map((movie) => (
            <MovieCard key={movie["#IMDB_ID"]} movie={movie} />
          ))
        ) : (
          <div>No movies</div>
        )}
      </div>
    </Layout>
  );
};

export default App;
