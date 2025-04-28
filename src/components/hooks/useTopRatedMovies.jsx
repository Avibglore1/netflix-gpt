import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { options } from '../../utils/constant';
import { addTopRatedMovies } from '../../utils/movieSlice';
const getTopRatedMovies = () => {
  
        const dispatch = useDispatch();
        const getTopRatedMovies = async() =>{
        const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options);
        const json = await data.json();
        dispatch(addTopRatedMovies(json.results));
      }
      useEffect(()=>{
        getTopRatedMovies();
      },[]) 
    
    

}

export default getTopRatedMovies