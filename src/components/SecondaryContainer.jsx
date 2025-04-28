import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

function SecondaryContainer() {
  const nowPlayingMovies = useSelector(store=>store.movies.nowPlayingMovies);
  const popularMovies = useSelector(store=>store.movies.popularMovies);
  const topRatedMovies = useSelector(store=>store.movies.topRatedMovies);
  const upcomingMovies = useSelector(store=>store.movies.upcomingMovies);
  return (
    <div>
      {nowPlayingMovies && nowPlayingMovies.length>0 ? <MovieList title={'Now Playing'} movies={nowPlayingMovies}/> : (<div>Loading..</div>)}
      {popularMovies && popularMovies.length>0 ? <MovieList title={'Popular'}  movies={popularMovies}/> : (<div>Loading..</div>)}
      {topRatedMovies && topRatedMovies.length>0 ? <MovieList title={'Top Rated'}  movies={topRatedMovies}/> : (<div>Loading..</div>)}
      {upcomingMovies && upcomingMovies.length>0 ? <MovieList title={'Upcoming'}  movies={upcomingMovies}/> : (<div>Loading..</div>)}
    </div>
  )
}

export default SecondaryContainer