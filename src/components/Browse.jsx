import React from 'react'
import Header from './Header'
import getNowPlayingMovies from './hooks/useNowPlayingMovies'

function Browse() {
  getNowPlayingMovies()
  return (
    <>
      <Header></Header>
      <div>Browse</div>
    </>
    
  )
}

export default Browse