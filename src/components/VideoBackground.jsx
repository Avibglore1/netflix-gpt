import React from 'react'
import useMovieTrailer from './hooks/useMovieTrailer';
import { useSelector } from 'react-redux';
function VideoBackground({movieId}){
 
  const videoTrailer = useSelector(store=>store.movies?.movieTrailer);
     
  useMovieTrailer(movieId);
    
  return (
    <div className='w-screen'>
      <iframe className='w-screen aspect-video' src={`https://www.youtube.com/embed/${videoTrailer?.key}?si=fRqgbzwYcurVZD6R`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  ></iframe>
    </div>
  )
}

export default VideoBackground