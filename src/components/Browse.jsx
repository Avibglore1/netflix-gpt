import React from 'react'
import Header from './Header'
import getNowPlayingMovies from './hooks/useNowPlayingMovies'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import getPopularMovies from './hooks/usePopularMovies'
import getTopRatedMovies from './hooks/useTopRatedMovies'
import getUpcomingMovies from './hooks/useUpcomingMovies'

function Browse() {
  getNowPlayingMovies();
  getPopularMovies();
  getTopRatedMovies();
  getUpcomingMovies();
  return (
    <>
      <Header></Header>
      <MainContainer />
      <SecondaryContainer/>
    </>
    
  )
}

export default Browse