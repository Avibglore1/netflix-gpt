import React, { useEffect } from 'react'
import { options } from '../utils/constant'
function VideoBackground({movieId}){

    const getMovieTrailer = async()=>{
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, options);
        const json = await data.json()
        console.log('movieTrailer',json);
        
    }
    useEffect(()=>{
        getMovieTrailer();
    },[])
  return (
    <div>VideoBackground</div>
  )
}

export default VideoBackground