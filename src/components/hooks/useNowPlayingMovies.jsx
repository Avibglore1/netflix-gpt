import { useEffect } from "react";
import { options } from "../../utils/constant";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../../utils/movieSlice";

const getNowPlayingMovies = () =>{
    const dispatch = useDispatch();
    const getNowPlayingMovie = async() =>{
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', options);
        const json = await data.json();
        dispatch(addNowPlayingMovies(json.results));
      }
      useEffect(()=>{
        getNowPlayingMovie();
      },[]) 
}

export default getNowPlayingMovies;