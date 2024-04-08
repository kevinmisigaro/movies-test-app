import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Movie } from "../../utils/interfaces";
import LoadingDots from "../../components/LoadingDots";

interface Params {
  movieId: string;
}

function Details() {
  const [movie, setMovie] = useState<Movie>();
  const [loading, setLoading] = useState<boolean>(true);
  let { movieId } = useParams<Params>();

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}=${movieId}`
      );
      if (response) {
        setMovie(response.data.description[0]);
        setLoading(false);
        console.log(response.data.description[0]);
        
      }
      console.log(response.data.description[0]);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div className="flex flex-row flex-start">
        <Link
          to={"/"}
          className="border-2 px-4 py-2 border-zinc-600 cursor-pointer rounded-md"
        >
          {`< Back`}
        </Link>
      </div>
      {loading ? (
        <div className="h-full w-full flex flex-row items-center justify-center mt-20">
          <LoadingDots />
        </div>
      ) : (
        <div className="flex flex-row gap-x-10 mt-10 ">
          <div
            className="h-[60vh] w-[30vw] bg-cover"
            style={{
              backgroundImage: `url("${movie?.["#IMG_POSTER"]}")`,
            }}
          ></div>
          <div className="py-10 flex flex-col gap-y-4">
            <h2 className="text-2xl font-bold">{movie?.["#TITLE"]}</h2>
            <p>
              Rank:{" "}
              <span className="ml-3 text-sm font-bold px-3 py-1 bg-zinc-600 text-white rounded-md">
                #{movie?.["#RANK"]}
              </span>
            </p>
            <p>Actors: {movie?.["#ACTORS"]}</p>
            <p>Release year: {movie?.["#YEAR"]}</p>
            <p>
              <a
                href={`movie?.["#IMDB_URL"]`}
                target="_blank"
                className={`underline cursor-pointer`}
              >
                View on IMDB{" "}
              </a>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Details;
