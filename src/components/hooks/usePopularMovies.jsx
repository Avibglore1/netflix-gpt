import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { options } from '../../utils/constant';
import { addPopularMovies } from '../../utils/movieSlice';
const getPopularMovies = () => {
  
        const dispatch = useDispatch();
        const getPopularMovies = async() =>{
        const data = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options);
        const json = await data.json();
        dispatch(addPopularMovies(json.results));
      }
      useEffect(()=>{
        getPopularMovies();
      },[]) 
    
    

}

export default getPopularMovies