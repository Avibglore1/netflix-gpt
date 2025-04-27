import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

function SecondaryContainer() {
  const movies = useSelector(store=>store.movies.nowPlayingMovies)
  
  return (
    <div>
      {movies && movies.length>0 ? <MovieList  movies={movies}/> : (<div>Loading..</div>)}
     
    </div>
  )
}

export default SecondaryContainer