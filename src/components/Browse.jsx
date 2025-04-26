import React from 'react'
import Header from './Header'
import getNowPlayingMovies from './hooks/useNowPlayingMovies'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'

function Browse() {
  getNowPlayingMovies()
  return (
    <>
      <Header></Header>
      <MainContainer />
      <SecondaryContainer/>
    </>
    
  )
}

export default Browse