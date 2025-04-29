import React from 'react'
import Header from './Header'
import getNowPlayingMovies from './hooks/useNowPlayingMovies'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import getPopularMovies from './hooks/usePopularMovies'
import getTopRatedMovies from './hooks/useTopRatedMovies'
import getUpcomingMovies from './hooks/useUpcomingMovies'
import GptSearch from './GptSearch'
import { useSelector } from 'react-redux'

function Browse() {
  const showGptSearch = useSelector(store=>store.gpt.showGptSearch);
  getNowPlayingMovies();
  getPopularMovies();
  getTopRatedMovies();
  getUpcomingMovies();
  return (
    <>
      <Header></Header>
      {
        showGptSearch ? <GptSearch/> : 
          <>
               <MainContainer />
               <SecondaryContainer/>
          </>  
      }
    </>    
  )
}

export default Browse