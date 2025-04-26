import React, { useEffect } from 'react'
import { options } from '../utils/constant'

function VideoBackground({movieId}){

    const getMovieTrailer = async()=>{
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, options);
        const json = await data.json()
        console.log('videos',json.results);
        const filteredMovie = json.results.filter(video=>video.type==='Trailer');
        const movieTrailer = filteredMovie.length ? filteredMovie[0] : json.results[0];
        console.log('movietrailer',movieTrailer);
        
        
    }
    useEffect(()=>{
        getMovieTrailer();
    },[])
  return (
    <div className='p-3'>
      <iframe 
      width="560" 
      height="315" 
      src="https://www.youtube.com/embed/mdfrG2cLK58?si=fRqgbzwYcurVZD6R" 
      title="YouTube video player" 
      frameBorder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      referrerPolicy="strict-origin-when-cross-origin" 
      allowFullScreen></iframe>
    </div>
  )
}

export default VideoBackground