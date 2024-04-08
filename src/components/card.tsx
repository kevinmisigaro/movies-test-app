import { Movie } from "../utils/interfaces";

const MovieCard = ({ movie }: { movie: Movie }) => {
  return (
    <div className="card w-full bg-base-100 shadow-xl hover:border-4 hover:border-zinc-800 cursor-pointer">
       <div className="w-full h-[50vh] bg-cover" style={{
        backgroundImage: `url('${movie["#IMG_POSTER"]}')`
       }}></div>
      <div className="card-body">
        <h2 className="card-title">{movie["#TITLE"]}</h2>
        <p>{movie["#YEAR"]}</p>
      </div>
    </div>
  );
};

export default MovieCard;
