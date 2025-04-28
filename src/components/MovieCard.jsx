import React from 'react'
import { IMAGE_CDN_URL } from '../utils/constant'
function MovieCard({poster_path}) {
    
  return (
    <div>
        <img className='max-w-72' src={`${IMAGE_CDN_URL}${poster_path}`} alt="" />
    </div>
  )
}

export default MovieCard