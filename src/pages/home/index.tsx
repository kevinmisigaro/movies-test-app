import { useCallback, useEffect, useState } from "react";
import LoadingDots from "../../components/LoadingDots";
import MovieCard from "../../components/MovieCard";
import axios from "axios";
import { Movie } from "../../utils/interfaces";

function Home() {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [loading, setLoading] = useState<boolean>(true)
    const [searchText, setSearchText] = useState<string>("Niram");
  
    //function to fetch movies
    const fetchMovies = useCallback(async () => {
      setLoading(true)
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}=${searchText}`
        );
  
        console.log(response.data.description);
    
        if(response){
          setLoading(false)
          setMovies(response.data.description);
        }
      } catch (error) {
        console.log(error);
        setLoading(false)
      }
    }, [searchText]);
  
    const handleTextChange = (e: any) => {
      setSearchText(e.target.value);
    };
  
    useEffect(() => {
      fetchMovies();
    }, []);
  
    return (
      <>
        <div className="flex flex-row justify-center gap-0 w-full">
          <input
            type="text"
            onChange={handleTextChange}
            placeholder="Search"
            className="border border-zinc-800 rounded-l-md px-2 w-24 md:w-[30vw]"
          />
          <div
            onClick={fetchMovies}
            className="rounded-r-md text-white bg-zinc-800 border py-3 px-6 cursor-pointer"
          >
            Search
          </div>
        </div>
        <div
          className={`my-10`}
        >
          
          {
            loading ? <div className="h-full w-full flex flex-row items-center justify-center mt-20"><LoadingDots /></div> : movies.length > 0 ? (
             <div className=" grid grid-cols-1 md:grid-cols-3 items-center gap-x-12 gap-y-10">
              {
                 movies
                 .slice(0, 10)
                 .map((movie) => <MovieCard key={movie["#IMDB_ID"]} movie={movie} />)
              }
             </div>
            ) : (
              <div className="h-full w-full flex flex-row items-center justify-center mt-20">No movies</div>
            )
          }
        </div>
      </>
)}

export default Home