import React from 'react'
import MovieCard from './MovieCard'

function MovieList({movies}) {
    
  return (
    <div className='p-2'>
        <h1 className='font-semibold text-3xl p-2'>Now Playing</h1>
        <div className='flex overflow-hidden'>
        {movies.map(movie=><MovieCard key={movie.id} poster_path={movie?.poster_path}/>)}
        </div>
        
        
    </div>
  )
}

export default MovieList