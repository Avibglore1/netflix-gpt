import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { options } from "../../utils/constant";
import { addMovieTrailer } from "../../utils/movieSlice";

const useMovieTrailer = (movieId) =>{
    const dispatch = useDispatch();
    const getMovieTrailer = async()=>{
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, options);
        const json = await data.json()
        const filteredMovie = json.results.filter(video=>video.type==='Trailer');
        const movieTrailer = filteredMovie.length ? filteredMovie[0] : json.results[0];
        dispatch(addMovieTrailer(movieTrailer))
        

    }
    useEffect(()=>{
        getMovieTrailer();
    },[])
}

export default useMovieTrailer